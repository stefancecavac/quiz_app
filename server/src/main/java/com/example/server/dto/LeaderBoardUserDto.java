package com.example.server.dto;

import java.util.UUID;

public class LeaderBoardUserDto {
    private UUID id;
    private String username;
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

    public int getTrophy() {
        return trophy;
    }

    public void setTrophy(int trophy) {
        this.trophy = trophy;
    }

    public LeaderBoardUserDto() {
    }

    public LeaderBoardUserDto(UUID id, String username, int trophy) {
        this.id = id;
        this.username = username;
        this.trophy = trophy;
    }

}
