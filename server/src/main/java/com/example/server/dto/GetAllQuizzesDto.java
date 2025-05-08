package com.example.server.dto;

import java.util.UUID;

import com.example.server.enums.Difficulty;

public class GetAllQuizzesDto {

    private UUID id;
    private String title;
    private Difficulty difficulty;
    private int questionCount;
    private int currencyReward;
    private int trophyReward;

    public GetAllQuizzesDto(UUID id, String title, Difficulty difficulty, int questionCount,
            int currencyReward, int trophyReward) {
        this.id = id;
        this.title = title;
        this.difficulty = difficulty;
        this.questionCount = questionCount;
        this.currencyReward = currencyReward;
        this.trophyReward = trophyReward;
    }

    public GetAllQuizzesDto() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
    }

    public int getQuestionCount() {
        return questionCount;
    }

    public void setQuestionCount(int questionCount) {
        this.questionCount = questionCount;
    }

    public int getCurrencyReward() {
        return currencyReward;
    }

    public void setCurrencyReward(int currencyReward) {
        this.currencyReward = currencyReward;
    }

    public int getTrophyReward() {
        return trophyReward;
    }

    public void setTrophyReward(int trophyReward) {
        this.trophyReward = trophyReward;
    }

}
