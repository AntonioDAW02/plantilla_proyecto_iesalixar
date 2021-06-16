package org.iesalixar.agarciam.proyectofinaldaw.service;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Rol;
import org.iesalixar.agarciam.proyectofinaldaw.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService {
	
	@Autowired
	private RolRepository rolRepository;
	
	public List<Rol> findAll(){
		return rolRepository.findAll();
	}
	
}
