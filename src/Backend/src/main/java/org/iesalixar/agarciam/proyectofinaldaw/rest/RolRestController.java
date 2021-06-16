package org.iesalixar.agarciam.proyectofinaldaw.rest;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Rol;
import org.iesalixar.agarciam.proyectofinaldaw.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("rol")
public class RolRestController {
	
	@Autowired
	private RolService rolService;
	
	@GetMapping("/roles")
	private ResponseEntity<?> getAllRoles(){
		List<Rol> result = rolService.findAll();
		
		if (result.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	

}
