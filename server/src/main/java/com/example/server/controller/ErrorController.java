package com.example.server.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.dto.ApiErrorResponse;

@RestController
@ControllerAdvice
public class ErrorController {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiErrorResponse> handleExceptions(Exception ex) {
        ApiErrorResponse error = new ApiErrorResponse();
        error.setStatus(500);
        error.setMessage(ex.getMessage());
        return ResponseEntity.status(500).body(error);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiErrorResponse> handleIllegalArgumentException(IllegalArgumentException ex) {
        ApiErrorResponse error = new ApiErrorResponse();
        error.setStatus(400);
        error.setMessage(ex.getMessage());
        return ResponseEntity.status(400).body(error);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<ApiErrorResponse> handleBadCredentialsException(BadCredentialsException ex) {
        ApiErrorResponse error = new ApiErrorResponse();
        error.setStatus(401);
        error.setMessage("Incorrect username or password");
        return ResponseEntity.status(401).body(error);
    }
}
