package com.example.server.dto;

import java.util.UUID;

public class CurrentUserDto {

    private UUID id;
    private String username;
    private int currency;
    private int trophy;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getCurrency() {
        return currency;
    }

    public void setCurrency(int currency) {
        this.currency = currency;
    }

    public int getTrophy() {
        return trophy;
    }

    public void setTrophy(int trophy) {
        this.trophy = trophy;
    }

    public CurrentUserDto(UUID id, String username, int currency, int trophy) {
        this.id = id;
        this.username = username;
        this.currency = currency;
        this.trophy = trophy;
    }

}
