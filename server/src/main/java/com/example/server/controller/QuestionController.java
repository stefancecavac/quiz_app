package com.example.server.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.CreateQustionDto;
import com.example.server.entity.Question;
import com.example.server.service.QuestionService;

import jakarta.validation.Valid;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/questions")
public class QuestionController {

    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Question> getSingleQuestion(@PathVariable UUID id) {
        Question question = questionService.getQuestion(id);
        return ResponseEntity.ok(question);
    }

    @PostMapping("/")
    public ResponseEntity<CreateQustionDto> createQuestion(@Valid @RequestBody CreateQustionDto createQustionDto) {
        CreateQustionDto createdQuestion = questionService.createQuestion(createQustionDto);
        return ResponseEntity.ok(createdQuestion);
    }

}
