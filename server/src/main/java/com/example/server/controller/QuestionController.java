package com.example.server.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.CreateQustionDto;
import com.example.server.entity.Question;
import com.example.server.service.QuestionService;

import jakarta.validation.Valid;

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

    @PostMapping("/")
    public Question createQuestion(@Valid @RequestBody CreateQustionDto createQustionDto) {
        return questionService.createQuestion(createQustionDto);
    }

}
