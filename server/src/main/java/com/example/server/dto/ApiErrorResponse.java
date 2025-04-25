package com.example.server.dto;

import java.util.List;

public class ApiErrorResponse {
    private int status;
    private String message;
    private List<FieldErrors> errors;

    public static class FieldErrors {
        private String field;
        private String message;

        public FieldErrors() {
        }

        public FieldErrors(String field, String message) {
            this.field = field;
            this.message = message;
        }

        public String getField() {
            return field;
        }

        public void setField(String field) {
            this.field = field;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

    }

    public ApiErrorResponse() {
    }

    public ApiErrorResponse(int status, String message, List<FieldErrors> errors) {
        this.status = status;
        this.message = message;
        this.errors = errors;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<FieldErrors> getErrors() {
        return errors;
    }

    public void setErrors(List<FieldErrors> errors) {
        this.errors = errors;
    }

}
