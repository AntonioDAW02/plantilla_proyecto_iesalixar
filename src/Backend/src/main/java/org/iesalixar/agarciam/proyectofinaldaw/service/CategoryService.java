package org.iesalixar.agarciam.proyectofinaldaw.service;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Category;
import org.iesalixar.agarciam.proyectofinaldaw.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {

	@Autowired
	private CategoryRepository categoryRepository;
	
	public List<Category> findAll (){
		return categoryRepository.findAll();
	}
	
}
