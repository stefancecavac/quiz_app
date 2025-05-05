package com.example.server.service;

import java.security.Key;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.server.dto.CurrentUserDto;
import com.example.server.dto.LoginRequest;
import com.example.server.entity.User;
import com.example.server.repository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;
    private final UserDetailsService userDetailsService;
    private final UserRepository userRepository;

    public AuthenticationService(AuthenticationManager authenticationManager, UserDetailsService userDetailsService,
            UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.accessExpiration}")
    private long accessTokenExpiration;

    @Value("${jwt.refreshExpiration}")
    private long refreshTokenExpiration;

    public UserDetails authenticate(LoginRequest loginRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        return userDetailsService.loadUserByUsername(loginRequest.getUsername());
    }

    public String generateAccessToken(UserDetails userDetails) {
        return Jwts.builder()
                .subject(userDetails.getUsername())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + accessTokenExpiration))
                .signWith(getSigningKey())
                .compact();
    }

    public String generateRefreshToken(UserDetails userDetails) {
        return Jwts.builder()
                .subject(userDetails.getUsername())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + refreshTokenExpiration))
                .signWith(getSigningKey())
                .compact();
    }

    public UserDetails validateToken(String token) {
        final String username = extractUsername(token);
        return userDetailsService.loadUserByUsername(username);
    }

    public String extractUsername(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    private Key getSigningKey() {
        byte[] keyBytes = secretKey.getBytes();
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public com.example.server.entity.User registerUser(LoginRequest loginRequest) {
        Optional<User> existingUser = userRepository
                .findByUsername(loginRequest.getUsername());
        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("User with that username already exists");
        }

        com.example.server.entity.User newUser = new com.example.server.entity.User();
        newUser.setUsername(loginRequest.getUsername());
        newUser.setPassword(passwordEncoder.encode(loginRequest.getPassword()));
        newUser.setCurrency(300);
        newUser.setTrophy(0);
        newUser.setHearts(5);

        return userRepository.save(newUser);
    }

    public CurrentUserDto getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            String username = authentication.getName();
            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not found"));
            regenerateHearts(user);

            return new CurrentUserDto(user.getId(), user.getUsername(), user.getCurrency(), user.getTrophy(),
                    user.getHearts(),
                    user.getLastHeartUpdate());

        }

        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "No authenticated user found");
    }

    public void regenerateHearts(User user) {
        int maxHearts = 5;
        int regenMinutes = 5;
        LocalDateTime now = LocalDateTime.now();

        if (user.getHearts() >= maxHearts) {
            user.setLastHeartUpdate(now);
            return;
        }

        LocalDateTime lastUpdate = user.getLastHeartUpdate();

        if (lastUpdate == null) {
            user.setLastHeartUpdate(now);
            userRepository.save(user);
            return;
        }

        long minutesPassed = ChronoUnit.MINUTES.between(lastUpdate, now);
        int heartsToAdd = (int) (minutesPassed / regenMinutes);

        if (heartsToAdd > 0) {
            user.setHearts(Math.min(maxHearts, user.getHearts() + heartsToAdd));
            user.setLastHeartUpdate(lastUpdate.plusMinutes(heartsToAdd * regenMinutes));
            userRepository.save(user);
        }
    }
}
