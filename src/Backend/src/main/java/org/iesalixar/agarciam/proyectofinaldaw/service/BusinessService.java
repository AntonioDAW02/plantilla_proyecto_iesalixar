package org.iesalixar.agarciam.proyectofinaldaw.service;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Business;
import org.iesalixar.agarciam.proyectofinaldaw.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BusinessService {
	
	@Autowired
	private BusinessRepository businessRepository;
	
	public List<Business> findAll(){
		return businessRepository.findAll();
	}
	
	public void deleteById(long id) {
		businessRepository.deleteById(id);
	}
	
}
