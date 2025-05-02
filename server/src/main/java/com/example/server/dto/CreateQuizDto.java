package com.example.server.dto;

import java.util.UUID;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class CreateQuizDto {
    @Valid

    private UUID id;

    @NotNull(message = "title must not be empty!")
    @Size(min = 3, max = 100, message = "Title must be between 3 and 100 characters")
    private String title;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

}
