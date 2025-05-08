package com.example.server.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.server.dto.LeaderBoardUserDto;
import com.example.server.entity.User;
import com.example.server.repository.LeaderBoardRepository;

@Service
public class LeaderBoardService {

    private LeaderBoardRepository leaderBoardRepository;

    public LeaderBoardService(LeaderBoardRepository leaderBoardRepository) {
        this.leaderBoardRepository = leaderBoardRepository;
    }

    public List<LeaderBoardUserDto> getTop10Users() {
        List<User> topUsers = leaderBoardRepository.findTop100ByOrderByTrophyDesc();
        return topUsers.stream().map(top -> new LeaderBoardUserDto(top.getId(), top.getUsername(), top.getTrophy()))
                .toList();
    }

}
