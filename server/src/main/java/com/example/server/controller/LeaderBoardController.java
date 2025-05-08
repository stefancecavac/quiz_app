package com.example.server.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.LeaderBoardUserDto;
import com.example.server.service.LeaderBoardService;

@RestController
@RequestMapping("/api/leaderboards")
public class LeaderBoardController {

    private LeaderBoardService leaderBoardService;

    public LeaderBoardController(LeaderBoardService leaderBoardService) {
        this.leaderBoardService = leaderBoardService;
    }

    @GetMapping("/")
    public ResponseEntity<List<LeaderBoardUserDto>> getTop10Users() {
        List<LeaderBoardUserDto> topUsers = leaderBoardService.getTop10Users();
        return ResponseEntity.ok(topUsers);
    }

}
