package com.example.server.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entity.Option;

public interface OptionRepository extends JpaRepository<Option, UUID> {

}
