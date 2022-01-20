package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.api.ProductApi;
import com.example.ecommerce_backend.api.ProductsApi;
import com.example.ecommerce_backend.models.Product;
import com.example.ecommerce_backend.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class ProductController implements ProductsApi, ProductApi {

    ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @Override
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(), HttpStatus.OK);
    }


    @Override
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Product> getProductByid(Integer id) {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }
}
