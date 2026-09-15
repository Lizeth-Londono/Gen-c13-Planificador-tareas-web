package com.planificador.backend.repository;

import com.planificador.backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

/*
 * Aquí definimos el repositorio encargado de trabajar
 * con los datos de las tareas en PostgreSQL.
 *
 * Entonces, al extender JpaRepository<Task, Long>,
 * Spring Data JPA nos proporciona automáticamente
 * las operaciones básicas del CRUD, como:
 *
 * - consultar tareas
 * - buscar una tarea por ID
 * - guardar o actualizar una tarea
 * - eliminar una tarea
 *
 * Por eso, en este archivo no necesitamos escribir
 * consultas SQL manualmente para esas operaciones.
 */
public interface TaskRepository extends JpaRepository<Task, Long> {
}