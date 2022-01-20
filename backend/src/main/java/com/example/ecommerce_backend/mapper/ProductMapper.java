package com.example.ecommerce_backend.mapper;

import com.example.ecommerce_backend.models.Product;
import org.apache.ibatis.annotations.Mapper;


import java.util.List;
import java.util.Optional;

@Mapper
public interface ProductMapper{
    List<Product> getAllProducts();
    Optional<Product> getProductById(Integer id);
}
