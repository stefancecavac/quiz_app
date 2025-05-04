package com.example.server.dto;

import java.util.List;
import java.util.UUID;

public class SubmitQuizDto {
    private UUID id;
    private List<SubmitAnswerDto> answers;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public List<SubmitAnswerDto> getAnswers() {
        return answers;
    }

    public void setAnswers(List<SubmitAnswerDto> answers) {
        this.answers = answers;
    }

    public SubmitQuizDto(UUID id, List<SubmitAnswerDto> answers) {
        this.id = id;
        this.answers = answers;
    }

    public SubmitQuizDto() {
    }

}
