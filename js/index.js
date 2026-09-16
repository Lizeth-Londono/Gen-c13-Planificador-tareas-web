// Aquí se busca el formulario y los campos que se utilizarán desde JavaScript.

// const = crea una variable que no será reasignada.
// document = representa el documento HTML.
// querySelector = busca el primer elemento que coincida con el selector recibido.
// # = indica que se está buscando un elemento por su id.


// Aquí buscamos el formulario principal donde se registran las tareas.
// formularioTarea = guarda la referencia al formulario encontrado en el HTML.
const formularioTarea = document.querySelector("#formularioTarea");


// Aquí buscamos el campo donde el usuario escribe el nombre de la tarea.
// nombreTarea = guarda la referencia al input del nombre.
const nombreTarea = document.querySelector("#nombreTarea");


// Aquí buscamos el campo donde el usuario escribe la descripción.
// descripcionTarea = guarda la referencia al campo de descripción.
const descripcionTarea = document.querySelector("#descripcionTarea");


// Aquí buscamos el campo donde el usuario selecciona la fecha de entrega.
// fechaEntrega = guarda la referencia al input de tipo fecha.
const fechaEntrega = document.querySelector("#fechaEntrega");


// Aquí buscamos el campo donde el usuario selecciona el estado.
// estadoTarea = guarda la referencia al selector de estado.
const estadoTarea = document.querySelector("#estadoTarea");


// Aquí buscamos el elemento donde se mostrarán los mensajes de error.
// mensajeError = guarda la referencia al contenedor visual del error.
const mensajeError = document.querySelector("#mensajeError");


// Aquí buscamos el elemento donde se mostrarán los mensajes de éxito.
// mensajeExito = guarda la referencia al contenedor visual del mensaje correcto.
const mensajeExito = document.querySelector("#mensajeExito");


// Aquí buscamos el contenedor donde se mostrarán las tarjetas de tareas.
// listaTareas = guarda la referencia al contenedor identificado con #listaTareas.
const listaTareas = document.querySelector("#listaTareas");


// Aquí creamos una nueva instancia de TaskManager.
// new = crea un nuevo objeto utilizando la clase TaskManager.
// taskManager = será el objeto encargado de administrar las tareas.
const taskManager = new TaskManager();


// Aquí escuchamos cuando el usuario intenta enviar el formulario.
// addEventListener = permite reaccionar a una acción del usuario.
// "submit" = representa el evento de envío del formulario.
// async = permite utilizar await dentro de la función.
// function (event) = función que se ejecuta cuando ocurre el envío.
// event = guarda la información del evento ocurrido.
formularioTarea.addEventListener("submit", async function (event) {

    // Aquí evitamos que el navegador recargue la página automáticamente.
    // preventDefault() = cancela el comportamiento normal del formulario.
    event.preventDefault();


    // Aquí reunimos en un solo objeto los datos escritos por el usuario.
    // datosTarea = objeto temporal que contiene la información del formulario.
    const datosTarea = {

        // Aquí guardamos el nombre escrito en el campo nombreTarea.
        // .value = obtiene el valor actual del input.
        nombre: nombreTarea.value,

        // Aquí guardamos la descripción escrita por el usuario.
        descripcion: descripcionTarea.value,

        // Aquí guardamos la fecha seleccionada.
        fecha: fechaEntrega.value,

        // Aquí guardamos el estado seleccionado.
        estado: estadoTarea.value

    };


    // Aquí enviamos los datos a la función de validación.
    // validFormFieldInput() = revisa si los campos cumplen las reglas definidas.
    // resultadoValidacion = guarda el resultado devuelto por la función.
    const resultadoValidacion = validFormFieldInput(datosTarea);


    // Aquí verificamos si la validación indicó que existen errores.
    // === false = comprueba que el valor sea exactamente falso.
    if (resultadoValidacion.valido === false) {

        // Aquí colocamos el mensaje de error dentro del elemento correspondiente.
        // textContent = modifica el texto visible de un elemento HTML.
        mensajeError.textContent = resultadoValidacion.mensaje;

        // Aquí hacemos visible el mensaje de error.
        // classList = permite modificar las clases CSS del elemento.
        // remove("d-none") = elimina la clase de Bootstrap que lo mantenía oculto.
        mensajeError.classList.remove("d-none");

        // Aquí ocultamos el mensaje de éxito para evitar mostrar mensajes contradictorios.
        // add("d-none") = agrega la clase que oculta el elemento.
        mensajeExito.classList.add("d-none");

        // Aquí detenemos la ejecución del envío.
        // return = termina la función actual.
        return;

    }


    // Aquí ocultamos cualquier mensaje de error anterior.
    mensajeError.classList.add("d-none");


    // Aquí intentamos ejecutar la operación que depende del backend.
    // try = agrupa instrucciones que podrían generar un error.
    try {

        // Aquí enviamos la tarea al TaskManager.
        // await = espera a que termine la petición al backend antes de continuar.
        // addTask() = realiza internamente la petición POST.
        await taskManager.addTask(

            // Aquí enviamos el nombre de la tarea.
            datosTarea.nombre,

            // Aquí enviamos la descripción.
            datosTarea.descripcion,

            // Aquí enviamos la fecha de entrega.
            datosTarea.fecha,

            // Aquí enviamos el estado seleccionado.
            datosTarea.estado

        );


        // Aquí reconstruimos visualmente la lista de tareas.
        // render() = toma taskManager.tasks y genera nuevamente las tarjetas.
        taskManager.render();


        // Aquí definimos el mensaje que verá el usuario después del guardado correcto.
        mensajeExito.textContent = "La tarea se guardó correctamente.";

        // Aquí hacemos visible el mensaje de éxito.
        mensajeExito.classList.remove("d-none");


        // Aquí limpiamos los campos del formulario.
        // reset() = devuelve los campos a su estado inicial.
        formularioTarea.reset();


        // Aquí mostramos en consola el arreglo actualizado de tareas.
        // console.log() = permite observar información durante las pruebas.
        console.log(taskManager.tasks);

    }
    catch (error) {

        // Aquí capturamos cualquier error ocurrido durante la petición al backend.
        // catch = se ejecuta cuando una instrucción dentro de try genera un error.

        // Aquí mostramos al usuario el mensaje asociado al error.
        mensajeError.textContent = error.message;

        // Aquí hacemos visible el mensaje de error.
        mensajeError.classList.remove("d-none");

        // Aquí ocultamos el mensaje de éxito.
        mensajeExito.classList.add("d-none");

        // Aquí mostramos el error completo en la consola del navegador.
        // console.error() = permite identificar fallos durante el desarrollo.
        console.error(error);

    }

});


// Aquí se crea la función encargada de validar los datos del formulario.
// function = declara una función.
// validFormFieldInput = nombre de la función.
// data = parámetro que recibe el objeto con los datos de la tarea.
function validFormFieldInput(data) {

    // Aquí verificamos que el nombre no esté vacío.
    // trim() = elimina espacios al inicio y al final.
    // === "" = verifica si después de limpiar espacios no queda texto.
    if (data.nombre.trim() === "") {

        // Aquí devolvemos un resultado indicando que la validación falló.
        return {

            // valido = false indica que los datos no cumplen la regla.
            valido: false,

            // mensaje = texto que se mostrará al usuario.
            mensaje: "El nombre de la tarea es obligatorio."

        };

    }


    // Aquí verificamos que el nombre tenga mínimo 3 caracteres.
    // length = indica la cantidad de caracteres del texto.
    // < 3 = comprueba si el nombre es demasiado corto.
    if (data.nombre.trim().length < 3) {

        // Aquí devolvemos el resultado de validación correspondiente.
        return {

            // Aquí indicamos que la información todavía no es válida.
            valido: false,

            // Aquí explicamos la regla que no se cumplió.
            mensaje: "El nombre de la tarea debe tener mínimo 3 caracteres."

        };

    }


    // Aquí verificamos que la descripción no esté vacía.
    if (data.descripcion.trim() === "") {

        // Aquí devolvemos un resultado negativo.
        return {

            // Aquí indicamos que la validación falló.
            valido: false,

            // Aquí mostramos el mensaje correspondiente.
            mensaje: "La descripción es obligatoria."

        };

    }


    // Aquí verificamos que la descripción tenga mínimo 5 caracteres.
    if (data.descripcion.trim().length < 5) {

        // Aquí devolvemos un resultado negativo.
        return {

            // Aquí indicamos que la información no cumple la regla.
            valido: false,

            // Aquí mostramos el mensaje correspondiente.
            mensaje: "La descripción debe tener mínimo 5 caracteres."

        };

    }


    // Aquí verificamos que se haya seleccionado una fecha.
    // === "" = significa que el campo todavía no tiene valor.
    if (data.fecha === "") {

        // Aquí devolvemos un resultado negativo.
        return {

            // Aquí indicamos que la validación falló.
            valido: false,

            // Aquí indicamos qué información falta.
            mensaje: "Debes seleccionar una fecha de entrega."

        };

    }


    // Aquí verificamos que se haya seleccionado un estado.
    if (data.estado === "") {

        // Aquí devolvemos un resultado negativo.
        return {

            // Aquí indicamos que la información no es válida.
            valido: false,

            // Aquí mostramos el mensaje correspondiente.
            mensaje: "Debes seleccionar un estado."

        };

    }


    // Aquí llegamos solamente si todas las validaciones anteriores fueron superadas.
    // Entonces, devolvemos un resultado positivo.
    return {

        // true = indica que la información cumple las reglas.
        valido: true,

        // Aquí definimos el mensaje asociado a la validación correcta.
        mensaje: "La información es correcta."

    };

}


// Aquí creamos una función para cargar las tareas al iniciar la aplicación.
// async = permite utilizar await dentro de la función.
async function cargarTareasIniciales() {

    // Aquí intentamos consultar el backend.
    try {

        // Aquí pedimos al TaskManager cargar las tareas.
        // await = espera la respuesta GET antes de continuar.
        // load() = consulta /api/tasks y llena taskManager.tasks.
        await taskManager.load();


        // Aquí mostramos visualmente las tareas recuperadas.
        taskManager.render();


        // Aquí mostramos en consola la lista obtenida desde PostgreSQL.
        console.log(taskManager.tasks);

    }
    catch (error) {

        // Aquí capturamos cualquier error ocurrido durante la consulta inicial.

        // Aquí mostramos el mensaje de error dentro de la página.
        mensajeError.textContent = error.message;

        // Aquí hacemos visible el mensaje.
        mensajeError.classList.remove("d-none");

        // Aquí ocultamos cualquier mensaje de éxito.
        mensajeExito.classList.add("d-none");

        // Aquí mostramos el error completo en consola.
        console.error(error);

    }

}


// Aquí ejecutamos la función de carga inicial.
// Entonces, cada vez que se abre o recarga la página,
// el frontend consulta nuevamente las tareas almacenadas en PostgreSQL.
cargarTareasIniciales();


// Aquí escuchamos todos los clics realizados dentro de listaTareas.
// Esto se conoce como delegación de eventos.
// Se utiliza porque las tarjetas y sus botones son creados dinámicamente.
// async = permite esperar las peticiones PUT y DELETE.
listaTareas.addEventListener("click", async function (event) {

    // Aquí verificamos si el elemento seleccionado tiene la clase done-button.
    // classList.contains() = comprueba si una clase existe en el elemento.
    if (event.target.classList.contains("done-button")) {

        // Aquí buscamos la tarjeta completa a la que pertenece el botón.
        // closest(".card") = busca el elemento padre más cercano con la clase card.
        const parentTask = event.target.closest(".card");


        // Aquí recuperamos el identificador almacenado en data-task-id.
        // dataset.taskId = obtiene el valor del atributo data-task-id.
        // Number() = convierte el valor de texto a número.
        const taskId = Number(parentTask.dataset.taskId);


        // Aquí intentamos actualizar el estado en el backend.
        try {

            // Aquí pedimos al TaskManager cambiar el estado.
            // await = espera a que el PUT termine correctamente.
            // toggleTaskStatus() = actualiza el registro en PostgreSQL.
            await taskManager.toggleTaskStatus(taskId);


            // Aquí reconstruimos la lista para mostrar el nuevo estado.
            taskManager.render();


            // Aquí definimos el mensaje de éxito.
            mensajeExito.textContent =
                "El estado de la tarea se actualizó correctamente.";


            // Aquí hacemos visible el mensaje de éxito.
            mensajeExito.classList.remove("d-none");


            // Aquí ocultamos cualquier mensaje de error anterior.
            mensajeError.classList.add("d-none");

        }
        catch (error) {

            // Aquí capturamos cualquier error ocurrido durante la actualización.

            // Aquí mostramos el mensaje de error.
            mensajeError.textContent = error.message;

            // Aquí hacemos visible el mensaje.
            mensajeError.classList.remove("d-none");

            // Aquí ocultamos el mensaje de éxito.
            mensajeExito.classList.add("d-none");

            // Aquí mostramos el error completo en consola.
            console.error(error);

        }

    }


    // Aquí verificamos si el elemento seleccionado tiene la clase delete-button.
    if (event.target.classList.contains("delete-button")) {

        // Aquí buscamos la tarjeta completa donde se encuentra el botón.
        const parentTask = event.target.closest(".card");


        // Aquí recuperamos el identificador de la tarea.
        // Number() convierte el valor del dataset a número.
        const taskId = Number(parentTask.dataset.taskId);


        // Aquí intentamos eliminar la tarea en el backend.
        try {

            // Aquí solicitamos al TaskManager eliminar la tarea.
            // await = espera a que termine la petición DELETE.
            await taskManager.deleteTask(taskId);


            // Aquí reconstruimos la lista sin la tarea eliminada.
            taskManager.render();


            // Aquí definimos el mensaje de éxito.
            mensajeExito.textContent =
                "La tarea se eliminó correctamente.";


            // Aquí hacemos visible el mensaje de éxito.
            mensajeExito.classList.remove("d-none");


            // Aquí ocultamos cualquier mensaje de error anterior.
            mensajeError.classList.add("d-none");

        }
        catch (error) {

            // Aquí capturamos cualquier error ocurrido durante la eliminación.

            // Aquí mostramos el mensaje del error.
            mensajeError.textContent = error.message;

            // Aquí hacemos visible el mensaje de error.
            mensajeError.classList.remove("d-none");

            // Aquí ocultamos el mensaje de éxito.
            mensajeExito.classList.add("d-none");

            // Aquí mostramos el error completo en la consola.
            console.error(error);

        }

    }

});
