package com.example.ecommerce_backend;

import com.example.ecommerce_backend.mapper.ProductMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class EcommerceBackendApplicationTests {

    @Autowired
    ProductMapper productMapper;

    @Test
    void contextLoads() {

    }

    @Test
    public void test(){
        productMapper.getAllProducts().forEach(System.out::println);
    }





}
