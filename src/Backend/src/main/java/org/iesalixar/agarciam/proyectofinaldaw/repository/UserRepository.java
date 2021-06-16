package org.iesalixar.agarciam.proyectofinaldaw.repository;

import org.iesalixar.agarciam.proyectofinaldaw.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	public User findByUsername(String username);
	public int findRolByUsername(String username);
}
