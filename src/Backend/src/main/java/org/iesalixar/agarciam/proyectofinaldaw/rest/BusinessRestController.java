package org.iesalixar.agarciam.proyectofinaldaw.rest;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Business;
import org.iesalixar.agarciam.proyectofinaldaw.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("business")
public class BusinessRestController {
	
	@Autowired
	private BusinessService businessService;
	
	@GetMapping("/all")
	private ResponseEntity<?> getAllBusiness(){
		List<Business> result = businessService.findAll();
		
		if (result.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteBusinessById(@PathVariable Long id) {
		businessService.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}
