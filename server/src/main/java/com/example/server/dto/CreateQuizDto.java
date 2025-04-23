package com.example.server.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;

public class CreateQuizDto {
    @Valid

    @NotBlank(message = "Title must not be empty!")
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

}
