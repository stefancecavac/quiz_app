package com.example.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.CurrentUserDto;
import com.example.server.service.ShopService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/shop")
public class ShopController {

    private final ShopService shopService;

    public ShopController(ShopService shopService) {
        this.shopService = shopService;
    }

    @PutMapping("/")
    public ResponseEntity<CurrentUserDto> purchaseHeartController() {
        CurrentUserDto userBoughtHeart = shopService.purchaseHearts();
        return ResponseEntity.ok(userBoughtHeart);
    }

}
