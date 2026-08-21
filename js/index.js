/* Se busca el formulario y los campos que se validaran con
document.querySelector("#...."); esto busca en mi HTML el elemento
que contenga dentro de los (parentesis) y lo guarda en una variable
para poder trabajar con el desde Js*/
const formularioTarea = document.querySelector("#formularioTarea");

const nombreTarea = document.querySelector("#nombreTarea");
const descripcionTarea = document.querySelector("#descripcionTarea");
const fechaEntrega = document.querySelector("#fechaEntrega");
const estadoTarea = document.querySelector("#estadoTarea");

const mensajeError = document.querySelector("#mensajeError");
const mensajeExito = document.querySelector("#mensajeExito");


/* Aqui procedo a escuchar cuando el usuario intenta enviar al formulario*/
formularioTarea.addEventListener("submit", function (event) {

    /* Aqui evito que la pagina se recargue mientras valido los datos*/
    event.preventDefault();

    /* Aqui guardo lo que el usuario escribio o selecciono*/
    const datosTarea = {

        nombre: nombreTarea.value,
        descripcion: descripcionTarea.value,
        fecha: fechaEntrega.value,
        estado: estadoTarea.value
    };


    /* Valido la informacion ingresada */
    const resultadoValidacion = validFormFieldInput(datosTarea);

    if (resultadoValidacion.valido === false) {

        /* Se muestra el mensaje de error */
        mensajeError.textContent = resultadoValidacion.mensaje;
        mensajeError.classList.remove("d-none");

        /* Se oculta el mensaje de exito */
        mensajeExito.classList.add("d-none");

    } else {

        /* Se oculta el mensaje cuando la informacion es correcta */
        mensajeError.classList.add("d-none");

        /* Se muestra el mensaje de exito */
        mensajeExito.textContent = resultadoValidacion.mensaje;
        mensajeExito.classList.remove("d-none");

    }


});

/* Aqui procedo a validar que los campos obligatorios tengan informacion*/
function validFormFieldInput(data) {

    if (data.nombre.trim() === "") { return { valido: false, mensaje: "El nombre de la tarea es obligatorio." }; }

    if (data.nombre.trim().length < 3) { return { valido: false, mensaje: "El nombre de la tarea debe tener mínimo 3 caracteres." }; }

    if (data.descripcion.trim() === "") { return { valido: false, mensaje: "La descripción es obligatoria." }; }

    if (data.descripcion.trim().length < 5) { return { valido: false, mensaje: "La descripción debe tener mínimo 5 caracteres." }; }

    if (data.fecha === "") { return { valido: false, mensaje: "Debes seleccionar una fecha de entrega." }; }

    if (data.estado === "") { return { valido: false, mensaje: "Debes seleccionar un estado." }; }

    return { valido: true, mensaje: "La información es correcta." };
}

// Aquí se crea una nueva instancia de TaskManager
const taskManager = new TaskManager();

// Aquí se verifica en consola la lista de tareas
console.log(taskManager.tasks);

// Aquí se busca el botón que cambia el estado de la tarea
const botonCompletar = document.querySelector(".btn-completar");

// Aquí se escucha el clic del botón para cambiar el estado de la tarea
botonCompletar.addEventListener("click", function () {

    // Aquí se busca la tarjeta donde se encuentra el botón
    const tarjeta = botonCompletar.closest(".card");

    // Aquí se busca el estado de la tarea dentro de la tarjeta
    const estadoTarea = tarjeta.querySelector(".badge");

    // Aquí se verifica si la tarea está pendiente
    if (estadoTarea.textContent === "Pendiente") {

        // Aquí se cambia el estado de la tarea a completada
        estadoTarea.textContent = "Completada";

        // Aquí se cambia el color del estado de pendiente a completada
        estadoTarea.classList.remove("text-bg-warning");
        estadoTarea.classList.add("text-bg-success");

        // Aquí se cambia el texto del botón para volver la tarea a pendiente
        botonCompletar.textContent = "Marcar como pendiente";

        } 
        // Aquí se devuelve la tarea al estado pendiente
        else {

            // Aquí se cambia el estado de la tarea a pendiente
            estadoTarea.textContent = "Pendiente";

            // Aquí se cambia el color del estado de completada a pendiente
            estadoTarea.classList.remove("text-bg-success");
            estadoTarea.classList.add("text-bg-warning");

            // Aquí se cambia el texto del botón para volver a marcar la tarea como completada
            botonCompletar.textContent = "Marcar como completada";

        }

});
