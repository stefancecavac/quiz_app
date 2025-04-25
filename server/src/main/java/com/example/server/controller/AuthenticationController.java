package com.example.server.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.AuthResponse;
import com.example.server.dto.CurrentUserDto;
import com.example.server.dto.LoginRequest;
import com.example.server.entity.User;
import com.example.server.service.AuthenticationService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "/api/auth")
public class AuthenticationController {

    @Value("${jwt.refreshExpiration}")
    private long refreshTokenExpiration;

    private final AuthenticationService authentiactionService;

    public AuthenticationController(AuthenticationService authentiactionService) {
        this.authentiactionService = authentiactionService;
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest, HttpServletResponse response) {
        UserDetails userDetails = authentiactionService.authenticate(loginRequest);
        String token = authentiactionService.generateAccessToken(userDetails);
        String refreshToken = authentiactionService.generateRefreshToken(userDetails);

        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setHttpOnly(true);
        cookie.setSecure(false);
        cookie.setPath("/");
        cookie.setMaxAge((int) refreshTokenExpiration);
        response.addCookie(cookie);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setToken(token);

        return ResponseEntity.ok(authResponse);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody LoginRequest loginRequest) {
        User user = authentiactionService.registerUser(loginRequest);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/current-user")
    public ResponseEntity<CurrentUserDto> getCurrentUser() {
        CurrentUserDto user = authentiactionService.getCurrentUser();
        return ResponseEntity.ok(user);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<AuthResponse> refreshToken(HttpServletRequest request, HttpServletResponse response) {
        Cookie[] cookies = request.getCookies();

        if (cookies == null) {
            return ResponseEntity.status(401).build();
        }
        String refreshToken = null;
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("refreshToken")) {
                refreshToken = cookie.getValue();
            }
        }

        try {
            UserDetails userDetails = authentiactionService.validateToken(refreshToken);
            String newAccessToken = authentiactionService.generateAccessToken(userDetails);
            AuthResponse authResponse = new AuthResponse();
            authResponse.setToken(newAccessToken);

            return ResponseEntity.ok(authResponse);
        } catch (Exception e) {
            return ResponseEntity.status(403).build();
        }

    }

}
