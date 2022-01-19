package com.example.ecommerce_backend.mapper;

import com.example.ecommerce_backend.models.Product;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.mybatis.spring.annotation.MapperScan;

import java.util.List;

@Mapper
@MapperScan
public interface ProductMapper{
    List<Product> getAllProducts();
}
