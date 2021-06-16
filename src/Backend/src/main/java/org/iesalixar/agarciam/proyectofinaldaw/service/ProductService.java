package org.iesalixar.agarciam.proyectofinaldaw.service;

import java.util.List;
import java.util.Optional;

import org.iesalixar.agarciam.proyectofinaldaw.model.Product;
import org.iesalixar.agarciam.proyectofinaldaw.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;
	
	public List<Product> findAll (){
		return productRepository.findAll();
	}
	
	public Product add(Product p) {
		return productRepository.save(p);
	}
	
	public Optional<Product> findProductById(Long id) {
		return productRepository.findById(id);
	}
	
	public Product findByName(String name) {
		return productRepository.findByName(name);
	}	
	
	public void delete(Long id) {
		productRepository.deleteById(id);
	}

}
