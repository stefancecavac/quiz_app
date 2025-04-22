package com.example.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.entity.Quiz;
import com.example.server.service.QuizService;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/quizzes")
public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/")
    public List<Quiz> getQuizzes() {
        return quizService.getAllQuizzes();
    }

    @GetMapping("/{id}")
    public Quiz getSingleQuiz(@PathVariable UUID id) {
        return quizService.getQuizById(id);
    }

    @PostMapping("/")
    public Quiz createQuiz(@RequestBody Quiz quiz) {
        return quizService.createQuiz(quiz);
    }

    @DeleteMapping("/{id}")
    public Quiz createQuiz(@PathVariable UUID id) {
        return quizService.deleteQuizById(id);
    }
}
