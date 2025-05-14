package com.example.server.service;

import org.springframework.stereotype.Service;

import com.example.server.dto.CurrentUserDto;
import com.example.server.entity.User;
import com.example.server.repository.UserRepository;

@Service
public class ShopService {

    private final UserRepository userRepository;
    private final AuthenticationService authenticationService;

    public ShopService(UserRepository userRepository, AuthenticationService authenticationService) {
        this.userRepository = userRepository;
        this.authenticationService = authenticationService;

    }

    public CurrentUserDto purchaseHearts() {
        CurrentUserDto currentUser = authenticationService.getCurrentUser();
        User user = userRepository.findById(currentUser.getId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        final int heartCost = 200;

        if (user.getHearts() >= 5) {
            throw new IllegalArgumentException("You have maximum numbers of hearts");
        }
        if (user.getCurrency() >= heartCost) {
            user.setCurrency(user.getCurrency() - heartCost);
            user.setHearts(user.getHearts() + 1);
            userRepository.save(user);
        } else {
            throw new IllegalArgumentException("Not enough currency to purchase a heart");
        }

        return new CurrentUserDto(user.getId(), user.getUsername(), user.getCurrency(), user.getTrophy(),
                user.getHearts(), user.getLastHeartUpdate());

    }
}
