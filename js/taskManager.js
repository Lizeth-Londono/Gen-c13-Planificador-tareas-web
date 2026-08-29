// Aquí se crea la clase que se encargará de organizar las tareas
// class = crea una clase
// TaskManager = nombre de la clase que administra las tareas
class TaskManager {

    // Aquí se inicia la lista de tareas vacía y el contador de identificadores
    // constructor = se ejecuta al crear un nuevo TaskManager
    // currentId = contador de identificadores
    // = 0 = valor inicial del contador
    constructor(currentId = 0) {

        // Aquí se crea el arreglo donde se guardarán las tareas
        // this = se refiere al objeto actual
        // tasks = lista donde se guardan las tareas
        // [] = arreglo vacío
        this.tasks = [];

        // Aquí se guarda el contador que permitirá identificar cada tarea
        // this = se refiere al objeto actual
        // currentId = guarda el contador dentro del objeto
        this.currentId = currentId;

    }

    // Aquí se crea el método que permitirá agregar nuevas tareas
    // addTask = método para registrar una tarea
    // nombre = nombre de la tarea
    // descripcion = detalle de la tarea
    // fechaEntrega = fecha de entrega
    // estado = estado recibido de la tarea
    addTask(nombre, descripcion, fechaEntrega, estado) {

        // Aquí se aumenta el identificador antes de guardar una nueva tarea
        // this.currentId = contador actual de tareas
        // ++ = aumenta el valor en 1
        this.currentId++;

        // Aquí se agrega una nueva tarea al arreglo de tareas
        // push = agrega un elemento al final del arreglo
        // { } = crea un objeto con la información de la tarea
        this.tasks.push({

            // Aquí se guarda el identificador único de la tarea
            // id = propiedad que identifica la tarea
            // this.currentId = valor actual del contador
            id: this.currentId,

            // Aquí se guarda el nombre de la tarea
            // nombre = propiedad que guarda el nombre recibido
            nombre: nombre,

            // Aquí se guarda la descripción de la tarea
            // descripcion = propiedad que guarda el detalle recibido
            descripcion: descripcion,

            // Aquí se guarda la fecha de entrega de la tarea
            // fechaEntrega = propiedad que guarda la fecha recibida
            fechaEntrega: fechaEntrega,

            // Aquí se guarda el estado inicial de la tarea
            // estado = propiedad que indica el estado de la tarea
            // PORHACER = estado inicial de una tarea nueva
            estado: "PORHACER"

        });

    }

}