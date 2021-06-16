package org.iesalixar.agarciam.proyectofinaldaw.rest;

import java.util.List;
import java.util.Optional;

import org.iesalixar.agarciam.proyectofinaldaw.model.User;
import org.iesalixar.agarciam.proyectofinaldaw.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("user")
public class UserRestController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/users")
	public ResponseEntity<?> allUsers() {
		List<User> result = userService.findAll();

		if (result.isEmpty()) {
			return ResponseEntity.notFound().build();
		} else {
			return ResponseEntity.ok(result);
		}
	}
	
	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody User user) {
		User newUser = userService.add(user);
		return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) {

		String username = user.getUsername();
		String password = user.getPassword();

		if (username == null || username.isBlank() || password == null || password.isBlank()) {
			return ResponseEntity.notFound().build();
		}

		User userdb = userService.findByUsername(username);
		
		String passwordEncripted = userdb.getPassword();

		if (userdb != null && BCrypt.checkpw(password, passwordEncripted)) {	
			return ResponseEntity.ok(userdb);
		}else {		
			return ResponseEntity.notFound().build();
		}
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<?> userById(@PathVariable long id) {
		Optional<User> result = userService.findUserById(id);

		if (result == null)
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok(result);
	}
	
	@GetMapping("username/{username}")
	public ResponseEntity<?> userByUsername(@PathVariable String username) {
		User result = userService.findByUsername(username);
		
		if (result == null)
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok(result);
	}
	
	@GetMapping("rol/{username}")
	public ResponseEntity<?> findRolByUsername(@PathVariable String username){
		User result = userService.findByUsername(username);
		Long rol = result.getRole().getId();
		
		if (rol == null)
			return ResponseEntity.notFound().build();
		else
			return ResponseEntity.ok(rol);
	}
	
	@PutMapping("/edituser/{id}")
	public ResponseEntity<?> updateUser(@PathVariable("id") Long id, @RequestBody User u){
		Optional<User> userData = userService.findUserById(id);
		
		if (userData.isPresent()) {
			User _user = userData.get();

			_user.setDni(u.getDni());
			_user.setName(u.getName());
			_user.setSurname(u.getSurname());
			_user.setUsername(u.getUsername());
			_user.setPhone_number(u.getPhone_number());
			_user.setEmail(u.getEmail());
			_user.setCity(u.getCity());
			
			return new ResponseEntity<>(userService.add(_user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/user/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
		userService.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}
