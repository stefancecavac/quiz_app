package com.example.server.entity;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String username;

    private String password;

    private int currency;

    private int trophy;

    private int hearts;

    private LocalDateTime lastHeartUpdate;

    @OneToMany(mappedBy = "user", orphanRemoval = true, cascade = CascadeType.ALL)
    @JsonBackReference
    private List<Quiz> quizzes;

    public User() {
    }

    public User(UUID id, String username, String password, int currency, int trophy, int hearts,
            LocalDateTime lastHeartUpdate, List<Quiz> quizzes) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.currency = currency;
        this.trophy = trophy;
        this.hearts = hearts;
        this.lastHeartUpdate = lastHeartUpdate;
        this.quizzes = quizzes;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Quiz> getQuizzes() {
        return quizzes;
    }

    public void setQuizzes(List<Quiz> quizzes) {
        this.quizzes = quizzes;
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

    public int getHearts() {
        return hearts;
    }

    public void setHearts(int hearts) {
        this.hearts = hearts;
    }

    public LocalDateTime getLastHeartUpdate() {
        return lastHeartUpdate;
    }

    public void setLastHeartUpdate(LocalDateTime lastHeartUpdate) {
        this.lastHeartUpdate = lastHeartUpdate;
    }

}