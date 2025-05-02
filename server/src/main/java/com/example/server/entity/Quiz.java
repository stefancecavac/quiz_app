package com.example.server.entity;

import java.util.List;
import java.util.UUID;

import com.example.server.enums.Difficulty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "quiz")

public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String title;

    private Boolean isFinishedCreating = false;

    private Difficulty difficulty;

    private int currencyReward;

    private int trophyReward;

    private int questionCount;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Question> questions;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Quiz(UUID id, String title, Boolean isFinishedCreating, Difficulty difficulty, int currencyReward,
            int trophyReward, int questionCount, List<Question> questions, User user) {
        this.id = id;
        this.title = title;
        this.isFinishedCreating = isFinishedCreating;
        this.difficulty = difficulty;
        this.currencyReward = currencyReward;
        this.trophyReward = trophyReward;
        this.questionCount = questionCount;
        this.questions = questions;
        this.user = user;
    }

    public Quiz() {
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

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Boolean getIsFinishedCreating() {
        return isFinishedCreating;
    }

    public void setIsFinishedCreating(Boolean isFinishedCreating) {
        this.isFinishedCreating = isFinishedCreating;
    }

    public Difficulty getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(Difficulty difficulty) {
        this.difficulty = difficulty;
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

    public int getQuestionCount() {
        return questionCount;
    }

    public void setQuestionCount(int questionCount) {
        this.questionCount = questionCount;
    }

}
