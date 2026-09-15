package com.planificador.backend.controller;

import com.planificador.backend.model.Task;
import com.planificador.backend.repository.TaskRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/*
 * Aquí definimos el controlador encargado de recibir
 * las peticiones HTTP relacionadas con las tareas.
 *
 * Entonces, este archivo funciona como puente entre
 * el frontend y la base de datos.
 */
@RestController

/*
 * Aquí definimos la ruta base de este controlador.
 *
 * Entonces, todas las operaciones de tareas comenzarán desde:
 * http://localhost:8080/api/tasks
 */
@RequestMapping("/api/tasks")

/*
 * Aquí permitimos que el frontend pueda comunicarse
 * con este backend aunque se ejecute desde otro origen.
 *
 * En este caso usamos "*" porque estamos trabajando
 * en un entorno local de desarrollo.
 */
@CrossOrigin(origins = "*")
public class TaskController {

    /*
     * Aquí guardamos una referencia al repositorio de tareas.
     *
     * Entonces, desde este controlador podemos consultar,
     * guardar, actualizar y eliminar datos en PostgreSQL
     * sin escribir consultas SQL manualmente.
     */
    private final TaskRepository taskRepository;

    /*
     * Aquí Spring inyecta automáticamente TaskRepository.
     *
     * Entonces, cuando se crea TaskController,
     * ya tiene disponible el repositorio que necesita
     * para trabajar con la base de datos.
     */
    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    /*
     * Aquí atendemos una petición GET a /api/tasks.
     *
     * Entonces, buscamos todas las tareas almacenadas
     * en PostgreSQL y las devolvemos al cliente.
     */
    @GetMapping
    public List<Task> obtenerTareas() {
        return taskRepository.findAll();
    }

    /*
     * Aquí atendemos una petición POST para crear una tarea.
     *
     * @RequestBody convierte el JSON recibido en un objeto Task.
     * @Valid hace que Spring aplique las validaciones definidas
     * en la entidad antes de guardar la información.
     *
     * Entonces, si los datos son válidos, guardamos la tarea
     * y respondemos con HTTP 201 Created.
     */
    @PostMapping
    public ResponseEntity<Task> crearTarea(@Valid @RequestBody Task task) {

        Task nuevaTarea = taskRepository.save(task);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(nuevaTarea);
    }

    /*
     * Aquí atendemos una petición PUT para actualizar
     * una tarea existente según su ID.
     *
     * Entonces, primero buscamos la tarea antes de modificarla.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Task> actualizarTarea(
            @PathVariable Long id,
            @Valid @RequestBody Task taskActualizada) {

        /*
         * Aquí buscamos la tarea utilizando el ID recibido
         * desde la URL.
         *
         * Usamos Optional porque puede existir o no
         * una tarea con ese identificador.
         */
        Optional<Task> tareaExistente = taskRepository.findById(id);

        /*
         * Aquí verificamos si la tarea realmente existe.
         *
         * Entonces, si no encontramos el ID solicitado,
         * detenemos el proceso y respondemos con HTTP 404.
         */
        if (tareaExistente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        /*
         * Aquí recuperamos la tarea encontrada
         * para poder modificar sus valores actuales.
         */
        Task task = tareaExistente.get();

        /*
         * Aquí actualizamos únicamente los campos
         * que puede modificar una tarea.
         *
         * El ID no se cambia porque identifica
         * de forma única el registro en PostgreSQL.
         */
        task.setName(taskActualizada.getName());
        task.setDescription(taskActualizada.getDescription());
        task.setDueDate(taskActualizada.getDueDate());
        task.setStatus(taskActualizada.getStatus());

        /*
         * Aquí volvemos a guardar la tarea.
         *
         * Entonces, como el objeto ya tiene un ID existente,
         * JPA actualiza el registro en lugar de crear uno nuevo.
         */
        Task tareaGuardada = taskRepository.save(task);

        /*
         * Aquí devolvemos HTTP 200 OK junto con
         * la tarea ya actualizada.
         */
        return ResponseEntity.ok(tareaGuardada);
    }

    /*
     * Aquí atendemos una petición DELETE para eliminar
     * una tarea según el ID recibido.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTarea(@PathVariable Long id) {

        /*
         * Aquí verificamos primero si el registro existe.
         *
         * Entonces, evitamos intentar eliminar una tarea
         * que no se encuentra en la base de datos.
         */
        if (!taskRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        /*
         * Aquí eliminamos definitivamente la tarea
         * asociada con el ID recibido.
         */
        taskRepository.deleteById(id);

        /*
         * Aquí respondemos con HTTP 204 No Content.
         *
         * Entonces, indicamos que la eliminación fue exitosa
         * y que no necesitamos devolver un cuerpo en la respuesta.
         */
        return ResponseEntity.noContent().build();
    }
}