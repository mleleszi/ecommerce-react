package com.example.ecommerce_backend.service;

import com.example.ecommerce_backend.mapper.ProductMapper;
import com.example.ecommerce_backend.models.Product;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

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

    @Override
    public Product getProductById(Integer id) {
        Optional<Product> optionalProduct = productMapper.getProductById(id);
        if(optionalProduct.isEmpty())
            throw new NoSuchProductException(id);
        return optionalProduct.get();
    }
}
