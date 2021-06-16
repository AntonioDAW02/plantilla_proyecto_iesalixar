package org.iesalixar.agarciam.proyectofinaldaw.service;

import java.util.List;
import java.util.Optional;

import org.iesalixar.agarciam.proyectofinaldaw.model.User;
import org.iesalixar.agarciam.proyectofinaldaw.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public List<User> findAll (){
		return userRepository.findAll();
	}
	
	public User add(User u) {
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		u.setPassword(passwordEncoder.encode(u.getPassword()));
		userRepository.save(u);
		return u;
	}
	
	public Optional<User> findUserById(Long id) {
		return userRepository.findById(id);
	}
	
	public User findByUsername(String username){
		return userRepository.findByUsername(username);
	}
	
	public int findRolByUsername(String username) {
		return userRepository.findRolByUsername(username);	
	}
	
	public void deleteById(long id) {
		userRepository.deleteById(id);
	}
	
}
