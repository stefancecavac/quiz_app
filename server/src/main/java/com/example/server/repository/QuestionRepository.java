package com.example.server.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, UUID> {

}
