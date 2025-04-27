package com.example.server.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.server.dto.CreateOptionDto;
import com.example.server.dto.CreateQustionDto;
import com.example.server.entity.Option;
import com.example.server.entity.Question;
import com.example.server.entity.Quiz;
import com.example.server.repository.OptionRepository;
import com.example.server.repository.QuestionRepository;
import com.example.server.repository.QuizRepository;

@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final QuizRepository quizRepository;
    private final OptionRepository optionRepository;

    public QuestionService(QuestionRepository questionRepository, QuizRepository quizRepository,
            OptionRepository optionRepository) {
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
        this.optionRepository = optionRepository;
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

        List<CreateOptionDto> optionsDtos = createQustionDto.getOptions();

        if (optionsDtos.size() != 3) {
            throw new IllegalArgumentException("Each question must have exactly 3 options");
        }

        long correctCount = optionsDtos.stream().filter(dto -> Boolean.TRUE.equals(dto.getIsCorrect())).count();
        if (correctCount != 1) {
            throw new IllegalArgumentException("Each question must have exactly 1 correct option");
        }

        List<Option> options = optionsDtos.stream().map(dto -> {
            Option option = new Option();
            option.setContent(dto.getContent());
            option.setQuestion(question);
            option.setIsCorrect(dto.getIsCorrect());
            return option;
        }).toList();

        optionRepository.saveAll(options);

        return createQustionDto;
    }
}
