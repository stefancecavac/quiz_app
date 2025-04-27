package com.example.server.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.server.dto.CreateQustionDto;
import com.example.server.entity.Question;
import com.example.server.entity.Quiz;
import com.example.server.repository.QuestionRepository;
import com.example.server.repository.QuizRepository;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;

    public QuestionService(QuestionRepository questionRepository, QuizRepository quizRepository) {
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
    }

    public Question getQuestion(UUID id) {
        return questionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Question with that id not found"));

    }

    public CreateQustionDto createQuestion(CreateQustionDto createQustionDto, UUID quizId) {
        Quiz quiz = quizRepository.findById(quizId)
                .orElseThrow(() -> new IllegalArgumentException("Quiz whith that id not found"));

        Question question = new Question();
        question.setContent(createQustionDto.getContent());
        question.setQuiz(quiz);
        questionRepository.save(question);

        return createQustionDto;
    }
}
