package org.iesalixar.agarciam.proyectofinaldaw.repository;

import org.iesalixar.agarciam.proyectofinaldaw.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	public Product findByName(String name);
}
