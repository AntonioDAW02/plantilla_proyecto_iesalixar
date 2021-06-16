package org.iesalixar.agarciam.proyectofinaldaw.repository;

import org.iesalixar.agarciam.proyectofinaldaw.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository  extends JpaRepository<Order, Long>{

}
