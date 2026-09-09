// Aquí se busca el formulario y los campos que se utilizarán desde JavaScript
// const = crea una variable
// document = representa el documento HTML
// querySelector = busca el primer elemento que coincida
// # = indica que se busca un elemento por su id

// formularioTarea = guarda el formulario encontrado en el HTML
const formularioTarea = document.querySelector("#formularioTarea");

// nombreTarea = guarda el campo donde se escribe el nombre de la tarea
const nombreTarea = document.querySelector("#nombreTarea");

// descripcionTarea = guarda el campo donde se escribe la descripción
const descripcionTarea = document.querySelector("#descripcionTarea");

// fechaEntrega = guarda el campo donde se selecciona la fecha
const fechaEntrega = document.querySelector("#fechaEntrega");

// estadoTarea = guarda el campo donde se selecciona el estado
const estadoTarea = document.querySelector("#estadoTarea");

// mensajeError = guarda el elemento donde se mostrará un mensaje de error
const mensajeError = document.querySelector("#mensajeError");

// mensajeExito = guarda el elemento donde se mostrará un mensaje de éxito
const mensajeExito = document.querySelector("#mensajeExito");

// Aquí se busca el contenedor donde se encuentran las tareas
// listaTareas = guarda el contenedor de las tarjetas de tareas
// document = representa el documento HTML
// querySelector = busca el primer elemento que coincida
// #listaTareas = identifica el contenedor por su id
const listaTareas = document.querySelector("#listaTareas");

// Aquí se escucha cuando el usuario intenta enviar el formulario
// addEventListener = escucha una acción que ocurre en un elemento
// submit = acción de enviar el formulario
// function = crea una función que ejecutará las instrucciones
// event = guarda la información del evento ocurrido
formularioTarea.addEventListener("submit", function (event) {

    // Aquí se evita que la página se recargue mientras se validan los datos
    // preventDefault = evita el comportamiento automático del formulario
    event.preventDefault();

    // Aquí se guarda la información escrita o seleccionada por el usuario
    // datosTarea = objeto que reúne los datos del formulario
    // { } = crea un objeto
    // value = obtiene el valor actual de un campo
    const datosTarea = {

        // nombre = guarda el valor escrito en nombreTarea
        nombre: nombreTarea.value,

        // descripcion = guarda el valor escrito en descripcionTarea
        descripcion: descripcionTarea.value,

        // fecha = guarda la fecha seleccionada
        fecha: fechaEntrega.value,

        // estado = guarda el estado seleccionado
        estado: estadoTarea.value

    };


    // Aquí se valida la información ingresada
    // resultadoValidacion = guarda el resultado de la validación
    // validFormFieldInput = función que revisa los datos de la tarea
    const resultadoValidacion = validFormFieldInput(datosTarea);


    // Aquí se verifica si la información no es válida
    // if = ejecuta instrucciones cuando se cumple una condición
    // === = compara si dos valores son iguales
    if (resultadoValidacion.valido === false) {

        // Aquí se muestra el mensaje de error
        // textContent = cambia o guarda el texto de un elemento
        mensajeError.textContent = resultadoValidacion.mensaje;

        // Aquí se hace visible el mensaje de error
        // classList = permite trabajar con las clases de un elemento
        // remove = elimina una clase
        // d-none = clase de Bootstrap que oculta un elemento
        mensajeError.classList.remove("d-none");

        // Aquí se oculta el mensaje de éxito
        // add = agrega una clase
        mensajeExito.classList.add("d-none");

    }
    else {

        // Aquí se ejecuta cuando la información es correcta
        // else = se ejecuta cuando la condición del if no se cumple

        // Aquí se oculta el mensaje de error
        mensajeError.classList.add("d-none");

        // Aquí se guarda el mensaje de éxito
        mensajeExito.textContent = resultadoValidacion.mensaje;

        // Aquí se hace visible el mensaje de éxito
        mensajeExito.classList.remove("d-none");

        // Aquí se registra la tarea después de validar correctamente los datos
        // addTask = agrega la tarea al administrador
        taskManager.addTask(

            datosTarea.nombre,
            datosTarea.descripcion,
            datosTarea.fecha,
            datosTarea.estado

        );

        // Aquí se guardan las tareas después de registrar una nueva tarea
        // save = guarda la lista actual de tareas en localStorage
        taskManager.save();

        // Aquí se actualiza la lista de tareas mostrada en la página
        // render = vuelve a construir visualmente las tarjetas con las tareas actuales
        taskManager.render();

        // Aquí se verifica que la tarea del formulario se haya guardado
        // console.log = muestra la lista actualizada en la consola
        console.log(taskManager.tasks);

        // Aquí se limpian los campos después de registrar correctamente la tarea
        // reset = devuelve los campos del formulario a su estado inicial
        formularioTarea.reset();

    }

});


// Aquí se valida que los campos obligatorios tengan información
// function = crea una función
// validFormFieldInput = nombre de la función de validación
// data = recibe los datos que se van a validar
function validFormFieldInput(data) {

    // Aquí se valida que el nombre no esté vacío
    // trim = elimina espacios al inicio y al final
    // return = devuelve un resultado y termina la función
    if (data.nombre.trim() === "") {

        return {

            valido: false,
            mensaje: "El nombre de la tarea es obligatorio."

        };
    }

    // Aquí se valida que el nombre tenga mínimo 3 caracteres
    // length = indica la cantidad de caracteres
    // < = verifica si un valor es menor que otro
    if (data.nombre.trim().length < 3) {

        return {

            valido: false,
            mensaje: "El nombre de la tarea debe tener mínimo 3 caracteres."

        };
    }

    // Aquí se valida que la descripción no esté vacía
    if (data.descripcion.trim() === "") {

        return {

            valido: false,
            mensaje: "La descripción es obligatoria."

        };
    }

    // Aquí se valida que la descripción tenga mínimo 5 caracteres
    if (data.descripcion.trim().length < 5) {

        return {

            valido: false,
            mensaje: "La descripción debe tener mínimo 5 caracteres."

        };
    }

    // Aquí se valida que se haya seleccionado una fecha
    if (data.fecha === "") {

        return {

            valido: false,
            mensaje: "Debes seleccionar una fecha de entrega."

        };
    }

    // Aquí se valida que se haya seleccionado un estado
    if (data.estado === "") {

        return {

            valido: false,
            mensaje: "Debes seleccionar un estado."

        };
    }

    // Aquí se indica que toda la información es correcta
    // true = representa un resultado verdadero
    return {

        valido: true,
        mensaje: "La información es correcta."

    };

}

// Aquí se crea una nueva instancia de TaskManager
// taskManager = variable que guarda el administrador de tareas
// new = crea una nueva instancia
// TaskManager() = utiliza la clase TaskManager y ejecuta su constructor
const taskManager = new TaskManager();


// Aquí se recuperan las tareas guardadas cuando se inicia la aplicación
// load = carga las tareas almacenadas anteriormente en localStorage
taskManager.load();


// Aquí se muestran en la página las tareas recuperadas
// render = actualiza visualmente la lista con las tareas cargadas
taskManager.render();

// Aquí se verifica en consola la lista de tareas
// console.log = muestra información en la consola del navegador
// taskManager.tasks = arreglo donde se guardan las tareas
console.log(taskManager.tasks);

// Aquí se escucha cuando el usuario hace clic dentro de la lista de tareas
// addEventListener = escucha una acción que ocurre en un elemento
// click = acción de hacer clic
// event = guarda la información del elemento sobre el que se hizo clic
listaTareas.addEventListener("click", function (event) {

    // Aquí se verifica si el elemento seleccionado corresponde al botón para cambiar el estado.
    // done-button = clase utilizada para identificar el botón dinámico de la Tarea 7.
    if (event.target.classList.contains("done-button")) {

        // Aquí se busca la tarjeta que contiene el botón seleccionado.
        // closest(".card") = encuentra la tarjeta superior más cercana.
        const parentTask = event.target.closest(".card");

        // Aquí se recupera el identificador almacenado en data-task-id.
        // Number = convierte el identificador recibido como texto a un número.
        const taskId = Number(parentTask.dataset.taskId);

        // Aquí se busca dentro de TaskManager la tarea que tiene el identificador recuperado.
        // getTaskById = devuelve la tarea exacta que se quiere actualizar.
        const task = taskManager.getTaskById(taskId);

        // Aquí se verifica si la tarea seleccionada ya se encuentra completada.
        if (task.estado === "COMPLETADA") {

            // Aquí se devuelve la tarea seleccionada al estado pendiente.
            task.estado = "PORHACER";

        }
        else {

            // Aquí se cambia la tarea seleccionada al estado completado.
            task.estado = "COMPLETADA";

        }

        // Aquí se guarda en localStorage el nuevo estado de la tarea.
        taskManager.save();

        // Aquí se reconstruye la lista para mostrar visualmente el cambio.
        taskManager.render();

    }

    // La eliminación también se atiende mediante delegación de eventos porque
    // las tarjetas y sus botones son creados dinámicamente por render().
    if (event.target.classList.contains("delete-button")) {

        const parentTask = event.target.closest(".card");
        const taskId = Number(parentTask.dataset.taskId);

        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();

    }

});
