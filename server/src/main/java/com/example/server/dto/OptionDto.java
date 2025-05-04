package com.example.server.dto;

import java.util.UUID;

public class OptionDto {
    private UUID id;
    private String content;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public OptionDto() {
    }

    public OptionDto(UUID id, String content) {
        this.id = id;
        this.content = content;
    }

}
