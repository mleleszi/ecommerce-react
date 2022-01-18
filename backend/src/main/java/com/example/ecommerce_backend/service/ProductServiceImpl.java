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

        return productList;

        //return productMapper.getAllProducts();
    }
}
