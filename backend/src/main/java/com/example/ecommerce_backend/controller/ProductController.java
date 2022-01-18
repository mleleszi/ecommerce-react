package com.example.ecommerce_backend.controller;

import com.example.ecommerce_backend.api.ProductsApi;
import com.example.ecommerce_backend.models.Product;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class ProductController implements ProductsApi {

    @Override
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> productList = new ArrayList();

        Product product = new Product();

        product.setId(1);
        product.setName("Jean");
        product.setDesc("this is a description");
        product.setPrice(BigDecimal.valueOf(24.99));
        product.setStock(5);
        product.setImgUrl("https://i.ibb.co/cXFnLLV/3.png");
        product.setColor(Arrays.asList("blue", "red", "black"));
        product.setSize(Arrays.asList("XS", "S", "M"));

        productList.add(product);

        return new ResponseEntity<>(productList, HttpStatus.OK);
    }
}
