package com.example.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.CreateQuizDto;
import com.example.server.dto.GetAllQuizzesDto;
import com.example.server.entity.Quiz;
import com.example.server.service.QuizService;

import jakarta.validation.Valid;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/quizzes")

public class QuizController {

    private final QuizService quizService;

    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    @GetMapping("/")
    public ResponseEntity<List<GetAllQuizzesDto>> getQuizzes() {
        List<GetAllQuizzesDto> quizzes = quizService.getAllQuizzes();
        return ResponseEntity.ok(quizzes);
    }

    @GetMapping("/my-quizzes")
    public ResponseEntity<List<GetAllQuizzesDto>> getUserQuizzes() {
        List<GetAllQuizzesDto> quizzes = quizService.getAllUserQuizzess();
        return ResponseEntity.ok(quizzes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quiz> getSingleQuiz(@PathVariable UUID id) {
        Quiz quiz = quizService.getQuizById(id);
        return ResponseEntity.ok(quiz);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Quiz> markQuizFinished(@PathVariable UUID id) {
        Quiz quiz = quizService.markQuizFinished(id);
        return ResponseEntity.ok(quiz);
    }

    @PostMapping("/")
    public ResponseEntity<CreateQuizDto> createQuiz(@Valid @RequestBody CreateQuizDto createQuizDto) {
        CreateQuizDto createdQuiz = quizService.createQuiz(createQuizDto);
        return ResponseEntity.ok(createdQuiz);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Quiz> deleteQuiz(@PathVariable UUID id) {
        Quiz deletedQuiz = quizService.deleteQuizById(id);
        return ResponseEntity.ok(deletedQuiz);
    }
}
