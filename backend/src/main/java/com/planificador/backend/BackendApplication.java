package com.planificador.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/*
 * Aquí definimos el punto de entrada principal del backend.
 *
 * Entonces, cuando ejecutamos esta clase, Spring Boot inicia
 * la aplicación y prepara automáticamente los componentes
 * necesarios para que funcionen los controladores, repositorios,
 * entidades y la conexión con la base de datos.
 */
@SpringBootApplication
public class BackendApplication {

	/*
	 * Aquí comienza la ejecución del backend.
	 *
	 * Entonces, SpringApplication.run(...) levanta Spring Boot
	 * y mantiene activo el servidor para recibir peticiones HTTP.
	 */
	public static void main(String[] args) {

		SpringApplication.run(BackendApplication.class, args);
	}
}