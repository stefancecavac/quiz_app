package com.example.server.dto;

import java.util.UUID;

public class CurrentUserDto {

    private UUID id;
    private String username;

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

    public CurrentUserDto(UUID id, String username) {
        this.id = id;
        this.username = username;
    }

}
