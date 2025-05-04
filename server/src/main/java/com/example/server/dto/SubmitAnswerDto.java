package com.example.server.dto;

import java.util.UUID;

public class SubmitAnswerDto {

    private UUID questionId;
    private UUID optionId;

    public UUID getQuestionId() {
        return questionId;
    }

    public void setQuestionId(UUID questionId) {
        this.questionId = questionId;
    }

    public UUID getOptionId() {
        return optionId;
    }

    public void setOptionId(UUID optionId) {
        this.optionId = optionId;
    }

    public SubmitAnswerDto() {
    }

    public SubmitAnswerDto(UUID questionId, UUID optionId) {
        this.questionId = questionId;
        this.optionId = optionId;
    }

}
