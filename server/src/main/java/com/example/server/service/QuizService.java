package com.example.server.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.server.entity.Quiz;
import com.example.server.repository.QuizRepository;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Quiz getQuizById(UUID id) {
        return quizRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Quiz with id:" + id + " , not found"));
    }

    public Quiz createQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public Quiz deleteQuizById(UUID id) {
        Quiz quiz = quizRepository.findById(id).orElseThrow(() -> new RuntimeException("Quiz with that id not found!"));
        quizRepository.deleteById(id);
        return quiz;
    }

}
