package com.example.ecommerce_backend.service;

public class NoSuchProductException extends RuntimeException {
    public NoSuchProductException(Integer id) {
        super(String.format("No product with id: %d", id));
    }
}
