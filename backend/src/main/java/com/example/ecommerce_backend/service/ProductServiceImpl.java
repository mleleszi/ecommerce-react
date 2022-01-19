package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.mapper.ProductMapper;
import com.example.ecommerce_backend.models.Product;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    ProductMapper productMapper;

    public ProductServiceImpl(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    @Override
    public List<Product> getAllProducts() {
        return productMapper.getAllProducts();
    }
}
