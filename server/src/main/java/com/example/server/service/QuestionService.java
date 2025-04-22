package com.example.server.service;

import org.springframework.stereotype.Service;

import com.example.server.dto.CreateQustionDto;
import com.example.server.entity.Question;
import com.example.server.entity.Quiz;
import com.example.server.exception.ApiRequestException;
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

    public Question createQuestion(CreateQustionDto createQustionDto) {
        Quiz quiz = quizRepository.findById(createQustionDto.getQuizId())
                .orElseThrow(() -> new ApiRequestException("Quiz whith that id not found"));

        Question question = new Question();
        question.setContent(createQustionDto.getContent());
        question.setQuiz(quiz);

        return questionRepository.save(question);
    }
}
