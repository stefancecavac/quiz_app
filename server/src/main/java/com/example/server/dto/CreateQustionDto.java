package com.example.server.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;

public class CreateQustionDto {

    @Valid

    @NotBlank(message = "Content must not be empty!")
    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
