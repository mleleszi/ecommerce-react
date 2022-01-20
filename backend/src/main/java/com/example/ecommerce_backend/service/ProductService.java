package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.models.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    Product getProductById(Integer id);
}
