package org.iesalixar.agarciam.proyectofinaldaw.rest;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Category;
import org.iesalixar.agarciam.proyectofinaldaw.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("category")
public class CategoryRestRepository {
	
	@Autowired
	private CategoryService categoryService;
	
	@GetMapping("/categories")
	public ResponseEntity<?> allCategories() {
		List<Category> result = categoryService.findAll();
		if (result.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}

}
