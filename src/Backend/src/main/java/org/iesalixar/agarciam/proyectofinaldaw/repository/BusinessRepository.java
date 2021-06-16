package org.iesalixar.agarciam.proyectofinaldaw.repository;

import org.iesalixar.agarciam.proyectofinaldaw.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long>{

}
