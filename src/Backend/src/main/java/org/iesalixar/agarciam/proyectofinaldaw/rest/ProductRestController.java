package org.iesalixar.agarciam.proyectofinaldaw.rest;

import java.util.List;
import java.util.Optional;

import org.iesalixar.agarciam.proyectofinaldaw.model.Product;
import org.iesalixar.agarciam.proyectofinaldaw.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("product")
public class ProductRestController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping("/products")
	public ResponseEntity<?> allProducts() {
		List<Product> result = productService.findAll();
		if (result.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
	@PostMapping("/new")
	public ResponseEntity<?> add(@RequestBody Product p) {
		Product newProduct = productService.add(p);
		return ResponseEntity.status(HttpStatus.CREATED).body(newProduct);
	}

	@GetMapping("/byid/{id}")
	public ResponseEntity<?> productById(@PathVariable long id) {
		Optional<Product> result = productService.findProductById(id);
		if (result == null)
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok(result);
	}

	@GetMapping("/byname/{name}")
	public ResponseEntity<?> productByName(@PathVariable String name){
		Product result = productService.findByName(name);
		if (result == null) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}

	@PutMapping("/product/{id}")
	public ResponseEntity<?> updateProduct(@PathVariable("id") Long id, @RequestBody Product p){
		Optional<Product> productData = productService.findProductById(id);
		
		if (productData.isPresent()) {
			Product _product = productData.get();
			
			_product.setName(p.getName());
			_product.setHomologation(p.getHomologation());
			_product.setDescription(p.getDescription());
			_product.setPrice(p.getPrice());
			_product.setCategory(p.getCategory());	
			
			return new ResponseEntity<>(productService.add(_product), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Boolean> deleteProduct(@PathVariable Long id) {
		productService.delete(id);
		return ResponseEntity.ok((productService.findProductById(id)!=null));
		
	}
}
