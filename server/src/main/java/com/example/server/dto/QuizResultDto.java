package com.example.server.dto;

import java.util.List;

public class QuizResultDto {
    private List<QuestionDto> correct;
    private List<QuestionDto> incorrect;
    private int currency;
    private int trophy;

    public List<QuestionDto> getCorrect() {
        return correct;
    }

    public void setCorrect(List<QuestionDto> correct) {
        this.correct = correct;
    }

    public List<QuestionDto> getIncorrect() {
        return incorrect;
    }

    public void setIncorrect(List<QuestionDto> incorrect) {
        this.incorrect = incorrect;
    }

    public int getCurrency() {
        return currency;
    }

    public void setCurrency(int currency) {
        this.currency = currency;
    }

    public int getTrophy() {
        return trophy;
    }

    public void setTrophy(int trophy) {
        this.trophy = trophy;
    }

    public QuizResultDto() {
    }

    public QuizResultDto(List<QuestionDto> correct, List<QuestionDto> incorrect, int currency, int trophy) {
        this.correct = correct;
        this.incorrect = incorrect;
        this.currency = currency;
        this.trophy = trophy;
    }

}
