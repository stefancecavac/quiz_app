package com.example.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/shop")
public class ShopController {

    @PutMapping("/")
    public ResponseEntity<String> purchaseHeartController() {
        return ResponseEntity.ok("purchased");
    }

}
