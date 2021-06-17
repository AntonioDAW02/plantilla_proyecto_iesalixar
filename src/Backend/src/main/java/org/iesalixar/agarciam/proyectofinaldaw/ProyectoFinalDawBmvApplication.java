package org.iesalixar.agarciam.proyectofinaldaw;

import org.iesalixar.agarciam.proyectofinaldaw.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ProyectoFinalDawBmvApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(ProyectoFinalDawBmvApplication.class, args);
	}

	@Autowired
	UserService userService;
	
	@Override
	public void run(String... args) throws Exception {
		
	}
	
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("*").allowedMethods("*").allowedHeaders("*");
			}
		};
	}
	

}
