package com.example.ecommerce_backend.mapper;

import com.example.ecommerce_backend.models.Product;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface ProductMapper{

    List<Product> getAllProducts();
}
