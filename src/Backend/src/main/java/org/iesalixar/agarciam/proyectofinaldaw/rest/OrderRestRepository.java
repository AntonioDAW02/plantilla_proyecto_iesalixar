package org.iesalixar.agarciam.proyectofinaldaw.rest;

import java.util.List;

import org.iesalixar.agarciam.proyectofinaldaw.model.Order;
import org.iesalixar.agarciam.proyectofinaldaw.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("order")
public class OrderRestRepository {
	
	@Autowired
	private OrderService orderService;
	
	@GetMapping("/orders")
	public ResponseEntity<?> allOrders() {
		List<Order> result = orderService.findAll();
		if (result.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
}
