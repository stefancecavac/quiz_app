package com.example.server.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.example.server.dto.CreateQuizDto;
import com.example.server.dto.CurrentUserDto;
import com.example.server.dto.GetAllQuizzesDto;
import com.example.server.entity.Quiz;
import com.example.server.entity.User;
import com.example.server.repository.QuizRepository;
import com.example.server.repository.UserRepository;

@Service
public class QuizService {

    private final QuizRepository quizRepository;
    private final AuthenticationService authenticationService;
    private final UserRepository userRepository;

    public QuizService(QuizRepository quizRepository, AuthenticationService authenticationService,
            UserRepository userRepository) {
        this.quizRepository = quizRepository;
        this.authenticationService = authenticationService;
        this.userRepository = userRepository;
    }

    public List<GetAllQuizzesDto> getAllQuizzes() {
        List<Quiz> quizzes = quizRepository.findAll();
        return quizzes.stream().map(q -> new GetAllQuizzesDto(q.getId(), q.getTitle())).toList();
    }

    public List<GetAllQuizzesDto> getAllUserQuizzess() {
        CurrentUserDto user = authenticationService.getCurrentUser();
        List<Quiz> quizzes = quizRepository.findByUserId(user.getId());
        return quizzes.stream().map(q -> new GetAllQuizzesDto(q.getId(), q.getTitle())).toList();
    }

    public Quiz getQuizById(UUID id) {
        return quizRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Quiz with id: " + id + " not found"));
    }

    public CreateQuizDto createQuiz(CreateQuizDto createQuizDto) {
        CurrentUserDto currentUser = authenticationService.getCurrentUser();

        User user = userRepository.findById(currentUser.getId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        Quiz quiz = new Quiz();
        quiz.setTitle(createQuizDto.getTitle());
        quiz.setUser(user);
        quizRepository.save(quiz);

        return createQuizDto;
    }

    public Quiz deleteQuizById(UUID id) {
        CurrentUserDto currentUser = authenticationService.getCurrentUser();

        Quiz quiz = quizRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Quiz with id: " + id + " not found"));

        if (!quiz.getUser().getId().equals(currentUser.getId())) {
            throw new IllegalArgumentException("You are not authorized to delete this quiz");
        }
        quizRepository.deleteById(id);
        return quiz;
    }

}
