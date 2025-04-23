package com.example.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.CreateOptionDto;
import com.example.server.entity.Option;
import com.example.server.service.OptionService;

import jakarta.validation.Valid;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/questions/")
public class OptionController {

    private final OptionService optionService;

    public OptionController(OptionService optionService) {
        this.optionService = optionService;
    }

    @PostMapping(path = "/{id}/options")
    public List<Option> createOption(@PathVariable UUID id, @Valid @RequestBody List<CreateOptionDto> createOptionDto) {
        return optionService.createOption(id, createOptionDto);
    }

}
