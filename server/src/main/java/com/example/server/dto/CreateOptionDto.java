package com.example.server.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class CreateOptionDto {

    @Valid
    @NotBlank(message = "Content must not be empty!")
    private String content;

    @NotNull(message = "isCorrect must not be either true or false!")
    private Boolean isCorrect;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }

}
