package com.example.server.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.server.dto.CreateOptionDto;
import com.example.server.entity.Option;
import com.example.server.entity.Question;

import com.example.server.repository.OptionRepository;
import com.example.server.repository.QuestionRepository;

@Service
public class OptionService {

    private final OptionRepository optionRepository;
    private final QuestionRepository questionRepository;

    public OptionService(OptionRepository optionRepository, QuestionRepository questionRepository) {
        this.optionRepository = optionRepository;
        this.questionRepository = questionRepository;
    }

    public List<Option> createOption(UUID id, List<CreateOptionDto> createOptionDtoList) {
        Question question = questionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Question with that id not found"));

        int existingcount = question.getOptions() != null ? question.getOptions().size() : 0;
        if (createOptionDtoList.size() < 3) {
            new IllegalArgumentException("Each question must have 3 options");
        }
        if (existingcount >= 3) {
            new IllegalArgumentException("Each question must have 3 options");
        }

        Long correctCount = createOptionDtoList.stream().filter(dto -> Boolean.TRUE.equals(dto.getIsCorrect())).count();

        if (correctCount != 1) {
            new IllegalArgumentException("Question must have only 1 correct option");
        }

        List<Option> options = createOptionDtoList.stream().map(dto -> {
            Option option = new Option();
            option.setContent(dto.getContent());
            option.setQuestion(question);
            option.setIsCorrect(dto.getIsCorrect());
            return option;
        }).toList();

        return optionRepository.saveAll(options);

    }

}
