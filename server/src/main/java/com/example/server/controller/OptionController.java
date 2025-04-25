package com.example.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.CreateOptionDto;
import com.example.server.entity.Option;
import com.example.server.service.OptionService;

import jakarta.validation.Valid;

import java.util.List;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Option>> createOptions(@PathVariable UUID id,
            @Valid @RequestBody List<CreateOptionDto> createOptionDto) {
        List<Option> createdOptions = optionService.createOption(id, createOptionDto);
        return ResponseEntity.ok(createdOptions);
    }

}
