package com.example.server.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entity.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, UUID> {
    List<Quiz> findByUserId(UUID id);

}
