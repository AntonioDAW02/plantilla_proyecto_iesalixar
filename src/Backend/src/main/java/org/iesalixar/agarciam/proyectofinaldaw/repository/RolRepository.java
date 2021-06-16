package org.iesalixar.agarciam.proyectofinaldaw.repository;

import org.iesalixar.agarciam.proyectofinaldaw.model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<Rol, Long>{
	
}
