package com.example.server.dto;

import java.util.List;
import java.util.UUID;

public class QuestionDto {
    private UUID quizId;
    private UUID id;
    private String content;

    private List<OptionDto> options;

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

    public List<OptionDto> getOptions() {
        return options;
    }

    public void setOptions(List<OptionDto> options) {
        this.options = options;
    }

    public QuestionDto() {
    }

    public QuestionDto(UUID quizId, UUID id, String content, List<OptionDto> options) {
        this.quizId = quizId;
        this.id = id;
        this.content = content;
        this.options = options;
    }

    public UUID getQuizId() {
        return quizId;
    }

    public void setQuizId(UUID quizId) {
        this.quizId = quizId;
    }

}
