package org.iesalixar.agarciam.proyectofinaldaw.service;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Order;
import org.iesalixar.agarciam.proyectofinaldaw.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	public List<Order> findAll (){
		return orderRepository.findAll();
	}
	
}
