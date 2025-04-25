package com.example.server.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.server.dto.CreateQuizDto;
import com.example.server.dto.GetAllQuizzesDto;
import com.example.server.entity.Quiz;
import com.example.server.repository.QuizRepository;

@Service
public class QuizService {

    private final QuizRepository quizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<GetAllQuizzesDto> getAllQuizzes() {
        List<Quiz> quizzes = quizRepository.findAll();
        return quizzes.stream().map(q -> new GetAllQuizzesDto(q.getId(), q.getTitle())).toList();
    }

    public Quiz getQuizById(UUID id) {
        return quizRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Quiz with id: " + id + " not found"));
    }

    public CreateQuizDto createQuiz(CreateQuizDto createQuizDto) {
        Quiz quiz = new Quiz();
        quiz.setTitle(createQuizDto.getTitle());
        quizRepository.save(quiz);

        return createQuizDto;
    }

    public Quiz deleteQuizById(UUID id) {
        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Quiz with id: " + id + " not found"));
        quizRepository.deleteById(id);
        return quiz;
    }

}
