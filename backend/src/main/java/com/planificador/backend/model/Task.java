package com.planificador.backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

/*
 * Aquí definimos la entidad Task, que representa
 * cada tarea que se va a guardar en PostgreSQL.
 *
 * Entonces, con @Entity le indicamos a JPA que esta clase
 * debe relacionarse con una tabla de la base de datos.
 */
@Entity

/*
 * Aquí indicamos que la tabla asociada a esta entidad
 * se llama "tasks".
 */
@Table(name = "tasks")
public class Task {

    /*
     * Aquí definimos el identificador único de cada tarea.
     *
     * Entonces, con @Id indicamos que este campo es la llave primaria
     * y con GenerationType.IDENTITY dejamos que PostgreSQL
     * genere automáticamente el valor del ID.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*
     * Aquí guardamos el nombre de la tarea.
     *
     * Entonces, @NotBlank evita que el nombre llegue vacío,
     * nulo o solamente con espacios.
     */
    @NotBlank(message = "El nombre no puede estar vacío")
    private String name;

    /*
     * Aquí guardamos una descripción adicional de la tarea.
     *
     * En este caso es opcional, por eso no tiene
     * una validación obligatoria.
     */
    private String description;

    /*
     * Aquí guardamos la fecha límite de la tarea.
     *
     * Entonces, @NotNull obliga a que la fecha sea enviada
     * antes de guardar la tarea.
     */
    @NotNull(message = "La fecha de entrega es requerida")
    private LocalDate dueDate;

    /*
     * Aquí guardamos el estado actual de la tarea.
     *
     * Entonces, evitamos recibir un estado vacío
     * utilizando @NotBlank.
     *
     * Ejemplos:
     * PENDING
     * IN_PROGRESS
     * DONE
     */
    @NotBlank(message = "El estado no puede estar vacío")
    private String status;

    /*
     * Aquí dejamos un constructor vacío porque JPA
     * lo necesita para crear objetos Task cuando recupera
     * registros desde la base de datos.
     */
    public Task() {
    }

    /*
     * Aquí definimos un constructor para crear nuevas tareas.
     *
     * Entonces, recibimos los datos principales de la tarea,
     * pero no pedimos el ID porque PostgreSQL lo genera
     * automáticamente.
     */
    public Task(String name, String description, LocalDate dueDate, String status) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }

    /*
     * Aquí comienzan los métodos get y set.
     *
     * Los getters permiten consultar los valores de la tarea
     * y los setters permiten modificarlos cuando sea necesario,
     * por ejemplo durante una actualización.
     */

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}