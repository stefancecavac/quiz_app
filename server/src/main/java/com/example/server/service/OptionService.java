package com.example.server.service;

import org.springframework.stereotype.Service;

import com.example.server.dto.CreateOptionDto;
import com.example.server.entity.Option;
import com.example.server.entity.Question;
import com.example.server.exception.ApiRequestException;
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

    public Option createOption(CreateOptionDto createOptionDto) {
        Question question = questionRepository.findById(createOptionDto.getQuestionId())
                .orElseThrow(() -> new ApiRequestException("Question with that id not found"));
        Option option = new Option();

        option.setContent(createOptionDto.getContent());
        option.setQuestion(question);
        option.setIsCorrect(createOptionDto.getIsCorrect());

        return optionRepository.save(option);

    }

}
