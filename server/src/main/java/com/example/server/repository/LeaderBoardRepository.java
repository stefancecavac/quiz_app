package com.example.server.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.server.entity.User;

public interface LeaderBoardRepository extends JpaRepository<User, UUID> {
    List<User> findTop100ByOrderByTrophyDesc();
}
