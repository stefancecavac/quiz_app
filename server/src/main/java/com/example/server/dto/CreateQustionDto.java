package com.example.server.dto;

import java.util.UUID;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateQustionDto {

    @Valid

    @NotBlank(message = "Content must not be empty!")
    private String content;

    @NotNull(message = "QuizId must not be empty!")
    private UUID quizId;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public UUID getQuizId() {
        return quizId;
    }

    public void setQuizId(UUID quizId) {
        this.quizId = quizId;
    }

}
