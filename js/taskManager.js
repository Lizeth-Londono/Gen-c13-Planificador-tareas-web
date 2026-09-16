// Aquí se crea la clase encargada de administrar las tareas.
// class = permite crear una estructura que agrupa datos y comportamientos.
// TaskManager = nombre de la clase que manejará las tareas del frontend.
class TaskManager {


    // Aquí se crea el constructor de la clase.
    // constructor = método que se ejecuta automáticamente al usar new TaskManager().
    constructor() {

        // Aquí se crea el arreglo donde se guardarán temporalmente las tareas.
        // this = hace referencia a la instancia actual de TaskManager.
        // tasks = propiedad que contiene la lista de tareas disponibles.
        // [] = crea un arreglo vacío.
        this.tasks = [];


        // Aquí se guarda la dirección principal del backend.
        // apiUrl = propiedad donde se define la ruta base de la API.
        // Esta dirección apunta al controlador TaskController de Spring Boot.
        this.apiUrl = "http://localhost:8080/api/tasks";

    }


    // Aquí se crea el método encargado de registrar una nueva tarea.
    // async = permite utilizar await dentro del método.
    // addTask = nombre del método.
    // nombre, descripcion, fechaEntrega y estado = datos recibidos desde index.js.
    async addTask(nombre, descripcion, fechaEntrega, estado) {

        // Aquí se crea un objeto con la estructura que espera el backend.
        // const = crea una variable que no será reasignada.
        // tareaParaBackend = guarda temporalmente los datos antes de enviarlos.
        const tareaParaBackend = {

            // Aquí convertimos el nombre utilizado en el frontend.
            // name = nombre de la propiedad definida en la entidad Task del backend.
            // nombre = valor recibido desde el formulario.
            name: nombre,

            // Aquí convertimos la descripción al nombre esperado por el backend.
            description: descripcion,

            // Aquí convertimos la fecha al campo dueDate utilizado en Java.
            dueDate: fechaEntrega,

            // Aquí convertimos el estado al campo status del backend.
            status: estado

        };


        // Aquí enviamos la nueva tarea al backend.
        // response = guarda la respuesta recibida desde Spring Boot.
        // await = espera que la petición termine antes de continuar.
        // fetch = permite realizar peticiones HTTP desde JavaScript.
        // this.apiUrl = utiliza la dirección definida en el constructor.
        const response = await fetch(this.apiUrl, {

            // Aquí indicamos que la petición será de tipo POST.
            // POST = se utiliza para crear un nuevo registro.
            method: "POST",

            // Aquí configuramos los encabezados de la petición.
            // headers = informa al backend qué tipo de contenido estamos enviando.
            headers: {

                // Aquí indicamos que el cuerpo de la petición está en formato JSON.
                "Content-Type": "application/json"

            },

            // Aquí convertimos el objeto JavaScript a texto JSON.
            // JSON.stringify = transforma un objeto en una cadena JSON.
            // body = contenido que será enviado al backend.
            body: JSON.stringify(tareaParaBackend)

        });


        // Aquí verificamos si la respuesta del backend fue correcta.
        // response.ok = devuelve true cuando el código HTTP está entre 200 y 299.
        // ! = invierte el resultado.
        if (!response.ok) {

            // Aquí detenemos el proceso cuando la petición falla.
            // throw = genera un error.
            // new Error = crea un objeto de error con un mensaje.
            throw new Error("No fue posible guardar la tarea.");

        }


        // Aquí convertimos la respuesta JSON del backend a un objeto JavaScript.
        // response.json() = interpreta el cuerpo de la respuesta como JSON.
        // tareaGuardada = contiene la tarea ya registrada en PostgreSQL.
        const tareaGuardada = await response.json();


        // Aquí adaptamos nuevamente los nombres del backend al formato del frontend.
        // tareaFrontend = objeto que utilizará render() para mostrar la tarea.
        const tareaFrontend = {

            // Aquí guardamos el ID generado automáticamente por PostgreSQL.
            id: tareaGuardada.id,

            // Aquí convertimos name nuevamente a nombre.
            nombre: tareaGuardada.name,

            // Aquí convertimos description nuevamente a descripcion.
            descripcion: tareaGuardada.description,

            // Aquí convertimos dueDate nuevamente a fechaEntrega.
            fechaEntrega: tareaGuardada.dueDate,

            // Aquí convertimos status nuevamente a estado.
            estado: tareaGuardada.status

        };


        // Aquí agregamos la tarea ya guardada al arreglo del frontend.
        // push = agrega un elemento al final del arreglo.
        this.tasks.push(tareaFrontend);


        // Aquí devolvemos la tarea recién creada.
        // return = devuelve un valor al lugar donde se llamó addTask().
        return tareaFrontend;

    }


    // Aquí se crea el método encargado de buscar una tarea por su ID.
    // getTaskById = nombre del método.
    // taskId = identificador de la tarea que queremos encontrar.
    getTaskById(taskId) {

        // Aquí creamos una variable para guardar la tarea encontrada.
        // let = permite crear una variable cuyo valor puede cambiar.
        let foundTask;


        // Aquí recorremos todas las tareas disponibles.
        // for...of = recorre uno por uno los elementos de un arreglo.
        // task = representa la tarea actual del recorrido.
        // this.tasks = arreglo principal de tareas.
        for (let task of this.tasks) {

            // Aquí comparamos el ID de la tarea actual con el ID recibido.
            // === = compara valor y tipo de dato.
            if (task.id === taskId) {

                // Aquí guardamos la tarea cuando encontramos una coincidencia.
                foundTask = task;

            }

        }


        // Aquí devolvemos la tarea encontrada.
        // Si no existe una coincidencia, foundTask quedará como undefined.
        return foundTask;

    }


    // Aquí se crea el método encargado de construir el HTML de cada tarea.
    // createTaskHtml = recibe una tarea y devuelve su estructura visual.
    // task = objeto que contiene los datos de la tarea.
    createTaskHtml(task) {

        // Aquí definimos inicialmente la clase visual del estado.
        // let = permite modificar el valor posteriormente.
        // text-bg-warning = clase de Bootstrap que muestra un color amarillo.
        let claseEstado = "text-bg-warning";


        // Aquí definimos inicialmente el texto del botón de estado.
        let textoBoton = "Marcar como completada";


        // Aquí verificamos si la tarea está completada.
        if (task.estado === "COMPLETADA") {

            // Aquí cambiamos el estilo visual a color verde.
            claseEstado = "text-bg-success";

            // Aquí cambiamos el texto del botón.
            // Entonces, el usuario podrá regresar la tarea a pendiente.
            textoBoton = "Marcar como pendiente";

        }


        // Aquí devolvemos la estructura HTML correspondiente a la tarea.
        // return = devuelve el resultado del método.
        // ` ` = template literal que permite escribir HTML en varias líneas.
        // ${ } = permite insertar valores JavaScript dentro del HTML.
        return `

            <!-- Aquí se crea la tarjeta principal de la tarea -->
            <!-- card = clase de Bootstrap para crear una tarjeta -->
            <!-- mb-3 = agrega margen inferior -->
            <!-- data-task-id = guarda el ID de la tarea dentro del HTML -->
            <div class="card mb-3" data-task-id="${task.id}">

                <!-- Aquí se crea el contenido interno de la tarjeta -->
                <div class="card-body">

                    <!-- Aquí se muestra el nombre de la tarea -->
                    <!-- task.nombre = obtiene el nombre guardado en el objeto -->
                    <h3 class="card-title h5">
                        ${task.nombre}
                    </h3>

                    <!-- Aquí se muestra la descripción de la tarea -->
                    <p class="card-text">
                        ${task.descripcion}
                    </p>

                    <!-- Aquí se muestra la fecha de entrega -->
                    <p class="card-text">
                        Fecha de entrega: ${task.fechaEntrega}
                    </p>

                    <!-- Aquí se organiza el estado y los botones -->
                    <!-- d-flex = utiliza Flexbox -->
                    <!-- justify-content-between = separa los elementos -->
                    <!-- align-items-center = alinea verticalmente -->
                    <div class="d-flex justify-content-between align-items-center">

                        <!-- Aquí se muestra el estado actual -->
                        <!-- badge = estilo visual de Bootstrap -->
                        <!-- claseEstado = clase definida según el estado -->
                        <span class="badge ${claseEstado}">
                            ${task.estado}
                        </span>

                        <!-- Aquí se agrupan los botones de acciones -->
                        <!-- gap-2 = agrega espacio entre los botones -->
                        <div class="d-flex gap-2">

                            <!-- Aquí se crea el botón para cambiar el estado -->
                            <!-- done-button = clase utilizada desde index.js -->
                            <button
                                type="button"
                                class="btn btn-success btn-completar done-button"
                            >
                                ${textoBoton}
                            </button>

                            <!-- Aquí se crea el botón para eliminar la tarea -->
                            <!-- delete-button = clase utilizada desde index.js -->
                            <button
                                type="button"
                                class="delete-button btn btn-danger"
                            >
                                Eliminar
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        `;

    }


    // Aquí se crea el método encargado de eliminar una tarea.
    // async = permite esperar la respuesta del backend.
    // deleteTask = nombre del método.
    // taskId = ID de la tarea que se desea eliminar.
    async deleteTask(taskId) {

        // Aquí enviamos una petición DELETE al backend.
        // ${this.apiUrl}/${taskId} = construye la URL completa con el ID.
        const response = await fetch(`${this.apiUrl}/${taskId}`, {

            // Aquí indicamos el método HTTP que se utilizará.
            // DELETE = elimina un recurso existente.
            method: "DELETE"

        });


        // Aquí verificamos si la respuesta fue correcta.
        if (!response.ok) {

            // Aquí generamos un error si el backend no pudo eliminar la tarea.
            throw new Error("No fue posible eliminar la tarea.");

        }


        // Aquí actualizamos también la lista local del frontend.
        // filter = crea un nuevo arreglo utilizando una condición.
        // Solo se conservarán las tareas cuyo ID sea diferente.
        this.tasks = this.tasks.filter(function (task) {

            // Aquí comprobamos que el ID actual sea diferente al eliminado.
            // !== = verifica que dos valores sean diferentes.
            return task.id !== taskId;

        });

    }


    // Aquí se crea el método encargado de cambiar el estado de una tarea.
    // toggleTaskStatus = cambia entre pendiente y completada.
    // async = permite esperar la respuesta PUT del backend.
    async toggleTaskStatus(taskId) {

        // Aquí buscamos la tarea utilizando el ID recibido.
        // getTaskById = devuelve la tarea correspondiente.
        const task = this.getTaskById(taskId);


        // Aquí verificamos si la tarea realmente existe.
        // !task = significa que no se encontró ningún objeto.
        if (!task) {

            // Aquí detenemos el proceso si la tarea no existe.
            throw new Error("No se encontró la tarea.");

        }


        // Aquí creamos una variable para guardar el nuevo estado.
        let nuevoEstado;


        // Aquí verificamos si la tarea ya está completada.
        if (task.estado === "COMPLETADA") {

            // Aquí devolvemos la tarea al estado pendiente.
            nuevoEstado = "PORHACER";

        }
        else {

            // Aquí cambiamos la tarea al estado completado.
            nuevoEstado = "COMPLETADA";

        }


        // Aquí creamos el objeto que será enviado al backend.
        // Usamos los nombres definidos en la entidad Task de Java.
        const tareaActualizada = {

            // Aquí enviamos el nombre actual de la tarea.
            name: task.nombre,

            // Aquí enviamos la descripción actual.
            description: task.descripcion,

            // Aquí enviamos la fecha actual.
            dueDate: task.fechaEntrega,

            // Aquí enviamos el nuevo estado calculado.
            status: nuevoEstado

        };


        // Aquí enviamos la petición PUT al backend.
        // PUT = se utiliza para actualizar un recurso existente.
        const response = await fetch(`${this.apiUrl}/${taskId}`, {

            // Aquí indicamos que la operación será una actualización.
            method: "PUT",

            // Aquí configuramos el tipo de contenido enviado.
            headers: {

                // Aquí indicamos que enviamos información en formato JSON.
                "Content-Type": "application/json"

            },

            // Aquí convertimos la tarea actualizada a JSON.
            body: JSON.stringify(tareaActualizada)

        });


        // Aquí verificamos si la actualización fue correcta.
        if (!response.ok) {

            // Aquí generamos un error si la petición PUT falla.
            throw new Error("No fue posible actualizar la tarea.");

        }


        // Aquí obtenemos la tarea actualizada que devuelve Spring Boot.
        const tareaGuardada = await response.json();


        // Aquí actualizamos el estado dentro del objeto utilizado por el frontend.
        // tareaGuardada.status = valor que regresó el backend.
        task.estado = tareaGuardada.status;


        // Aquí devolvemos la tarea ya actualizada.
        return task;

    }


    // Aquí se crea el método encargado de cargar las tareas.
    // async = permite esperar la respuesta GET del backend.
    // load = nombre del método.
    async load() {

        // Aquí realizamos una petición GET a la API.
        // Como no indicamos method, fetch utiliza GET automáticamente.
        const response = await fetch(this.apiUrl);


        // Aquí verificamos que la consulta haya sido correcta.
        if (!response.ok) {

            // Aquí generamos un error si no fue posible consultar las tareas.
            throw new Error("No fue posible cargar las tareas.");

        }


        // Aquí convertimos la respuesta JSON en datos de JavaScript.
        // tareasBackend = arreglo recibido desde Spring Boot.
        const tareasBackend = await response.json();


        // Aquí convertimos cada tarea del backend al formato del frontend.
        // map = recorre un arreglo y crea otro arreglo transformado.
        this.tasks = tareasBackend.map(function (task) {

            // Aquí devolvemos una nueva tarea con los nombres utilizados en el frontend.
            return {

                // Aquí conservamos el ID generado por PostgreSQL.
                id: task.id,

                // Aquí convertimos name a nombre.
                nombre: task.name,

                // Aquí convertimos description a descripcion.
                descripcion: task.description,

                // Aquí convertimos dueDate a fechaEntrega.
                fechaEntrega: task.dueDate,

                // Aquí convertimos status a estado.
                estado: task.status

            };

        });

    }


    // Aquí se crea el método encargado de mostrar las tareas en pantalla.
    // render = reconstruye visualmente la lista.
    render() {

        // Aquí buscamos nuevamente el contenedor de tareas.
        // document.querySelector = busca el elemento por su selector.
        const listaTareas = document.querySelector("#listaTareas");


        // Aquí limpiamos el contenido anterior.
        // innerHTML = permite modificar el HTML interno del elemento.
        // "" = deja el contenedor vacío.
        listaTareas.innerHTML = "";


        // Aquí recorremos todas las tareas actuales.
        // for...of = permite recorrer los objetos del arreglo.
        for (let task of this.tasks) {

            // Aquí creamos la tarjeta HTML correspondiente a cada tarea.
            // += = agrega nuevo contenido sin eliminar el contenido anterior.
            // createTaskHtml(task) = devuelve la estructura HTML de la tarea.
            listaTareas.innerHTML += this.createTaskHtml(task);

        }

    }

}
