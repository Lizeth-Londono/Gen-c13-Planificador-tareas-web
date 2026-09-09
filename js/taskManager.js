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

    // Aquí se crea el método que permite buscar una tarea por su identificador.
    // getTaskById = nombre del método que recupera una tarea específica.
    // taskId = identificador de la tarea que se quiere encontrar.
    getTaskById(taskId) {

        // Aquí se crea una variable para guardar la tarea encontrada.
        // let = permite que el valor de la variable sea asignado posteriormente.
        // foundTask = almacenará la tarea cuyo identificador coincida.
        let foundTask;

        // Aquí se recorren una por una las tareas almacenadas.
        // for...of = permite recorrer los elementos de un arreglo.
        // this.tasks = arreglo donde se encuentran las tareas.
        for (let task of this.tasks) {

            // Aquí se compara el identificador de la tarea actual con el recibido.
            // === = comprueba que ambos valores sean iguales y del mismo tipo.
            if (task.id === taskId) {

                // Aquí se guarda la tarea que tiene el identificador buscado.
                foundTask = task;

            }

        }

        // Aquí se devuelve la tarea encontrada.
        // Si no existe una coincidencia, el resultado será undefined.
        return foundTask;

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

                            <button type="button" class="btn btn-success btn-completar done-button">
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

        // Aquí se convierte la lista de tareas a un texto JSON antes de guardarla
        // JSON.stringify = transforma el arreglo de objetos en una cadena de texto
        // localStorage solo puede almacenar valores en formato texto
        const tasksJson = JSON.stringify(this.tasks);

        // Aquí se guarda la lista serializada utilizando la clave "tasks"
        // setItem = crea o actualiza un dato dentro de localStorage
        localStorage.setItem("tasks", tasksJson);

        // Aquí se convierte el contador a texto para conservarlo en localStorage
        // String = transforma el valor numérico en una cadena de texto
        const currentId = String(this.currentId);

        // Aquí se guarda el último identificador utilizado
        // Esta información permite que addTask() continúe la numeración después de recargar
        localStorage.setItem("currentId", currentId);

    }

    // Aquí se crea el método que permitirá recuperar las tareas guardadas
    // load = nombre del método que carga las tareas desde localStorage
    load() {

        // Aquí se recupera el texto JSON asociado con la lista de tareas guardada
        // getItem = obtiene el valor almacenado utilizando la clave indicada
        // "tasks" = clave utilizada por save() para identificar la lista de tareas
        // Si la clave no existe, localStorage devuelve null
        const tasksJson = localStorage.getItem("tasks");

        // Aquí se verifica si se recuperó información antes de intentar convertirla
        // if = ejecuta las instrucciones cuando tasksJson contiene un valor
        // Esta validación evita ejecutar JSON.parse() cuando no existen tareas guardadas
        if (tasksJson) {

            // Aquí se convierte nuevamente el texto JSON en datos de JavaScript
            // JSON.parse = transforma la cadena de texto en un arreglo de tareas
            // this.tasks = reemplaza la lista vacía por las tareas recuperadas
            this.tasks = JSON.parse(tasksJson);

        }

        // Aquí se recupera por separado el último identificador utilizado
        // currentId = guarda temporalmente el valor recuperado
        // "currentId" = clave utilizada por save() para identificar el contador
        // localStorage devuelve el valor como texto o null si todavía no existe
        const currentId = localStorage.getItem("currentId");

        // Aquí se verifica que exista un contador guardado antes de restaurarlo
        // Esta condición conserva el valor inicial del constructor en el primer uso
        if (currentId) {

            // Aquí se restaura el contador dentro del administrador de tareas
            // Number = convierte el texto recuperado en un número
            // this.currentId = valor utilizado por addTask() para generar el siguiente id
            // La conversión evita concatenar texto y permite continuar la secuencia numérica
            this.currentId = Number(currentId);

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
