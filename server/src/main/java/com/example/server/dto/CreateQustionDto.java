package com.example.server.dto;

import java.util.List;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;

public class CreateQustionDto {

    @Valid

    @NotBlank(message = "Content must not be empty!")
    private String content;

    private List<CreateOptionDto> options;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<CreateOptionDto> getOptions() {
        return options;
    }

    public void setOptions(List<CreateOptionDto> options) {
        this.options = options;
    }

}
