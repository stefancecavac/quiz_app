package com.example.server.dto;

public class PurchaseHeartDto {

    private int heartCost;

    public int getHeartCost() {
        return heartCost;
    }

    public void setHeartCost(int heartCost) {
        this.heartCost = heartCost;
    }

    public PurchaseHeartDto(int heartCost) {
        this.heartCost = heartCost;
    }

}
