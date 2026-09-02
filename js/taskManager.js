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

    // Aquí se crea el método que construye la tarjeta de una tarea
    // createTaskHtml = nombre del método que crea el HTML de una tarea
    // task = parámetro que recibe el objeto con la información de la tarea
    createTaskHtml(task) {

        // Aquí se define inicialmente el color del estado como pendiente
        // let = crea una variable cuyo valor puede cambiar
        // claseEstado = guarda la clase de Bootstrap que tendrá el estado
        let claseEstado = "text-bg-warning";

        // Aquí se define inicialmente el texto del botón para completar la tarea
        // textoBoton = guarda el texto que aparecerá dentro del botón
        let textoBoton = "Marcar como completada";

        // Aquí se verifica si la tarea se encuentra completada
        // === = compara si dos valores son iguales
        if (task.estado === "COMPLETADA") {

            // Aquí se cambia el color del estado cuando la tarea está completada
            // text-bg-success = clase de Bootstrap que aplica color verde
            claseEstado = "text-bg-success";

            // Aquí se cambia el texto del botón para permitir regresar la tarea a pendiente
            textoBoton = "Marcar como pendiente";

        }

        // Aquí se devuelve la estructura HTML que representará la tarea en la página
        // return = devuelve el resultado creado por el método
        // ` ` = permite escribir una estructura HTML de varias líneas dentro de JavaScript
        // ${ } = permite insertar valores de JavaScript dentro del HTML
        return `

            <!-- Aquí se crea el contenedor principal de la tarjeta -->
            <!-- card = clase de Bootstrap que crea una tarjeta -->
            <!-- mb-3 = agrega un margen inferior -->
            <!-- data-task-id = guarda el identificador de la tarea dentro de la tarjeta -->
            <!-- task.id = obtiene el identificador de la tarea actual -->

            <div class="card mb-3" data-task-id="${task.id}">


                <!-- Aquí se crea el contenido interno de la tarjeta -->
                <!-- card-body = clase de Bootstrap que organiza el contenido de la tarjeta -->

                <div class="card-body">


                    <!-- Aquí se muestra el nombre de la tarea -->
                    <!-- task.nombre = obtiene el nombre guardado en la tarea -->

                    <h3 class="card-title h5">
                        ${task.nombre}
                    </h3>


                    <!-- Aquí se muestra la descripción de la tarea -->
                    <!-- task.descripcion = obtiene la descripción guardada -->

                    <p class="card-text">
                        ${task.descripcion}
                    </p>


                    <!-- Aquí se muestra la fecha de entrega de la tarea -->
                    <!-- task.fechaEntrega = obtiene la fecha guardada -->

                    <p class="card-text">
                        Fecha de entrega: ${task.fechaEntrega}
                    </p>


                    <!-- Aquí se organiza el estado y los botones de la tarea -->
                    <!-- d-flex = organiza los elementos utilizando Flexbox -->
                    <!-- justify-content-between = coloca los grupos a cada extremo -->
                    <!-- align-items-center = alinea los elementos verticalmente -->

                    <div class="d-flex justify-content-between align-items-center">


                        <!-- Aquí se muestra el estado actual de la tarea -->
                        <!-- badge = clase de Bootstrap que muestra información resaltada -->
                        <!-- claseEstado = aplica el color correspondiente al estado -->

                        <span class="badge ${claseEstado}">
                            ${task.estado}
                        </span>


                        <!-- Aquí se agrupan los botones de acciones de la tarea -->
                        <!-- d-flex = organiza los botones en una misma fila -->
                        <!-- gap-2 = agrega espacio entre los botones -->

                        <div class="d-flex gap-2">


                            <!-- Aquí se crea el botón que permitirá cambiar el estado de la tarea -->
                            <!-- btn-completar = clase utilizada desde JavaScript para identificar el botón -->
                            <!-- btn-success = aplica el estilo verde de Bootstrap -->

                            <button type="button" class="btn btn-success btn-completar">
                                ${textoBoton}
                            </button>


                            <!-- Aquí se crea el botón que permitirá eliminar la tarea -->
                            <!-- delete-button = clase utilizada desde JavaScript para identificar el botón -->
                            <!-- btn-danger = aplica el estilo rojo de Bootstrap -->

                            <button type="button" class="delete-button btn btn-danger">
                                Eliminar
                            </button>


                        <!-- Cierre grupo de botones -->
                        </div>


                    <!-- Cierre fila de estado y acciones -->
                    </div>


                <!-- Cierre contenido interno de la tarjeta -->
                </div>


            <!-- Cierre tarjeta de la tarea -->
            </div>

        `;

    }

    // Aquí se crea el método que permitirá eliminar una tarea
    // deleteTask = nombre del método que elimina una tarea
    // taskId = identificador de la tarea que se quiere eliminar
    deleteTask(taskId) {

        // Aquí se crea un nuevo arreglo donde se guardarán las tareas que no serán eliminadas
        // const = crea una variable que no será reasignada
        // newTasks = nombre del nuevo arreglo
        // [] = crea un arreglo vacío
        const newTasks = [];

        // Aquí se recorren todas las tareas guardadas actualmente
        // for...of = permite recorrer uno por uno los elementos de un arreglo
        // task = representa la tarea actual del recorrido
        // this.tasks = arreglo donde están guardadas todas las tareas
        for (let task of this.tasks) {

            // Aquí se compara el identificador de la tarea actual con el identificador que se quiere eliminar
            // !== = verifica que dos valores sean diferentes
            if (task.id !== taskId) {

                // Aquí se conserva la tarea cuando su identificador es diferente
                // push = agrega un elemento al final del arreglo
                newTasks.push(task);

            }

        }

        // Aquí se reemplaza la lista anterior por la nueva lista de tareas
        // this.tasks = arreglo principal donde se guardan las tareas
        // newTasks = contiene solamente las tareas que deben permanecer
        this.tasks = newTasks;

    }

    // Aquí se crea el método que permitirá cambiar el estado de una tarea
    // toggleTaskStatus = nombre del método que cambia entre pendiente y completada
    // taskId = identificador de la tarea que se quiere actualizar
    toggleTaskStatus(taskId) {

        // Aquí se recorren las tareas para encontrar la que se quiere actualizar
        // for...of = recorre uno por uno los elementos del arreglo
        for (let task of this.tasks) {

            // Aquí se verifica si la tarea actual tiene el identificador recibido
            // === = compara si dos valores son iguales
            if (task.id === taskId) {

                // Aquí se verifica si la tarea ya se encuentra completada
                if (task.estado === "COMPLETADA") {

                    // Aquí se devuelve la tarea al estado pendiente
                    task.estado = "PORHACER";

                }
                else {

                    // Aquí se cambia la tarea al estado completada
                    task.estado = "COMPLETADA";

                }

            }

        }

    }

    // Aquí se crea el método que permitirá guardar las tareas
    // save = nombre del método que guarda las tareas en localStorage
    save() {

        // Aquí se convierten las tareas a texto y se guardan en localStorage
        // localStorage = permite guardar información en el navegador
        // setItem = guarda un dato dentro de localStorage
        // "tasks" = nombre utilizado para identificar la información guardada
        // JSON.stringify = convierte el arreglo de tareas en texto
        // this.tasks = arreglo que contiene las tareas actuales
        localStorage.setItem("tasks", JSON.stringify(this.tasks));

    }

    // Aquí se crea el método que permitirá recuperar las tareas guardadas
    // load = nombre del método que carga las tareas desde localStorage
    load() {

        // Aquí se obtiene la información guardada en localStorage
        // const = crea una variable que no será reasignada
        // tareasGuardadas = guarda la información recuperada
        // getItem = obtiene un dato guardado en localStorage
        // "tasks" = nombre utilizado para identificar las tareas guardadas
        const tareasGuardadas = localStorage.getItem("tasks");

        // Aquí se verifica si existen tareas guardadas
        // if = ejecuta instrucciones cuando se cumple una condición
        // !== = verifica que dos valores sean diferentes
        // null = indica que no existe información guardada
        if (tareasGuardadas !== null) {

            // Aquí se convierte nuevamente el texto guardado en un arreglo de tareas
            // JSON.parse = convierte el texto JSON nuevamente en datos de JavaScript
            // this.tasks = arreglo donde se guardarán las tareas recuperadas
            this.tasks = JSON.parse(tareasGuardadas);

            // Aquí se recorren las tareas recuperadas para conservar el identificador más alto
            // for...of = permite recorrer uno por uno los elementos del arreglo
            // task = representa la tarea actual del recorrido
            for (let task of this.tasks) {

                // Aquí se verifica si el identificador de la tarea es mayor al contador actual
                // > = verifica si un valor es mayor que otro
                if (task.id > this.currentId) {

                    // Aquí se actualiza el contador con el identificador más alto encontrado
                    this.currentId = task.id;

                }

            }

        }

    }

    // Aquí se crea el método que permitirá mostrar las tareas en la página
    // render = nombre del método que actualiza la lista de tareas en la interfaz
    render() {

        // Aquí se busca el contenedor donde se mostrarán las tareas
        // const = crea una variable que no será reasignada
        // listaTareas = guarda el contenedor de las tareas
        // document = representa el documento HTML
        // querySelector = busca el primer elemento que coincida
        // #listaTareas = identifica el elemento por su id
        const listaTareas = document.querySelector("#listaTareas");

        // Aquí se limpia el contenido anterior de la lista
        // innerHTML = permite leer o cambiar el contenido HTML de un elemento
        // "" = deja el contenido vacío
        listaTareas.innerHTML = "";

        // Aquí se recorren todas las tareas guardadas
        // for.....of = permite recorrer uno por uno los elementos de un arreglo
        // task = representa la tarea actual del recorrido
        // this.tasks = arreglo donde se encuentran las tareas
        for (let task of this.tasks) {

            // Aquí se agrega a la lista la tarjeta correspondiente a la tarea
            // += = agrega nuevo contenido sin reemplazar lo que ya se agregó anteriormente
            // createTaskHtml = crea la estructura HTML de la tarea
            // task = tarea actual que se está mostrando
            listaTareas.innerHTML += this.createTaskHtml(task);

        }

    }

}