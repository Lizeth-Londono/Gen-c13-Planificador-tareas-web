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



/* Pruebas console, eliminar despues*/
console.log(formularioTarea);
console.log(nombreTarea);
console.log(descripcionTarea);
console.log(fechaEntrega);
console.log(estadoTarea);

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

    /* Ahora compruebo que estoy recibiendo los datos correctamente*/
    console.log(datosTarea);

    /* Valido la informacion ingresada */
    const formularioValido = validFormFieldInput(datosTarea);

    console.log(formularioValido);

    if (formularioValido === false) {

        /* Se muestra el mensaje de error */
        mensajeError.classList.remove("d-none");

    } else {

        /* Se oculta el mensaje cuando la informacion es correcta */
        mensajeError.classList.add("d-none");

    }


});

/* Aqui procedo a validar que los campos obligatorios tengan informacion*/
function validFormFieldInput(data) {

    if (data.nombre.trim() === "" || data.descripcion.trim() === "" || data.fecha === "" || data.estado === "") {
        return false;
    }
    return true;
}

