# Planificador de Tareas Web

Proyecto individual desarrollado durante el Bootcamp Full Stack Java de Generation Colombia.

## Descripción

Aplicación web para crear, visualizar y gestionar tareas.

El proyecto se desarrolla de forma progresiva durante las diferentes tareas propuestas en el bootcamp, incorporando estructura visual, validaciones, manejo de eventos, clases, objetos, arreglos y administración de tareas mediante JavaScript.


## Sprint 1

En este sprint se trabajó en la construcción inicial de la interfaz y la validación del formulario del Planificador de Tareas.


### Tarea 1

- Creación de la estructura inicial del proyecto.

- Construcción del formulario para registrar una tarea.

- Uso de HTML5 y Bootstrap.

- Creación de los campos:

  - Nombre de la tarea.

  - Descripción.

  - Fecha de entrega.

  - Estado.

- Creación del botón para registrar una tarea.


### Tarea 2

- Creación del componente visual de tarjeta de tarea usando Bootstrap Card.

- Construcción del contenedor `listaTareas`.

- Creación de cinco tareas de ejemplo con información diferente.

- Visualización de:

  - Nombre de la tarea.

  - Descripción.

  - Fecha de entrega.

  - Estado.

- Uso de Bootstrap Badge para representar visualmente los estados.

- Aplicación de estilos personalizados con CSS.

- Adaptación visual basada en el wireframe realizado en Figma.

- Preparación visual de las secciones:

  - Inicio.

  - Registrar tarea.

  - Mis tareas.

  - Estado sin tareas.

- Preparación de navegación interna mediante enlaces HTML.


### Tarea 3

- Vinculación del archivo `js/index.js` con el proyecto.

- Uso de `document.querySelector()` para obtener los campos del formulario.

- Captura de la información ingresada por el usuario.

- Uso del evento `submit` para validar el formulario antes de continuar.

- Uso de `event.preventDefault()` para evitar la recarga automática de la página durante la validación.

- Creación de la función `validFormFieldInput(data)`.

- Validación de campos obligatorios:

  - Nombre de la tarea.

  - Descripción.

  - Fecha de entrega.

  - Estado.

- Validación de longitud mínima:

  - Nombre de la tarea: mínimo 3 caracteres.

  - Descripción: mínimo 5 caracteres.

- Creación de mensajes específicos de validación para indicar al usuario qué campo debe corregir.

- Creación de un mensaje de éxito cuando la información ingresada es correcta.

- Uso de clases de Bootstrap para mostrar y ocultar los mensajes de validación.

- Pruebas con datos correctos e incorrectos para comprobar el funcionamiento del formulario.


## Sprint 2

En este sprint se comenzó a incorporar comportamiento dinámico al Planificador de Tareas mediante JavaScript, permitiendo administrar las tareas y trabajar con información almacenada en objetos y arreglos.


### Tarea 4

- Creación del archivo `js/taskManager.js`.

- Creación de la clase `TaskManager`.

- Creación del constructor de la clase.

- Creación del arreglo inicial donde se almacenarán las tareas:

```js
this.tasks = [];
```

- Creación de una instancia de `TaskManager` desde el archivo `js/index.js`.

- Verificación inicial del arreglo de tareas mediante la consola del navegador.

- Uso de JavaScript para trabajar con los botones de las tarjetas de tareas.

- Uso de `document.querySelectorAll()` para seleccionar varios botones de la interfaz.

- Uso de `forEach()` para recorrer los botones encontrados.

- Uso de `addEventListener("click")` para detectar cuando el usuario hace clic sobre un botón.

- Uso de `closest()` para identificar la tarjeta correspondiente al botón seleccionado.

- Uso de `querySelector()` dentro de cada tarjeta para identificar los elementos que debían modificarse.

- Implementación del cambio visual del estado de las tareas.

- Cambio del texto del estado mediante `textContent`.

- Uso de `classList.remove()` y `classList.add()` para modificar las clases de Bootstrap.

- Cambio visual de los estados de las tareas.

- Implementación de botones para cambiar una tarea entre:

  - Pendiente.

  - Completada.

- Cambio del texto del botón dependiendo del estado de la tarea:

  - Marcar como completada.

  - Marcar como pendiente.

- Pruebas individuales sobre las tarjetas para comprobar el cambio de estado.


### Tarea 5

- Ampliación de la clase `TaskManager`.

- Modificación del constructor para recibir un identificador inicial:

```js
constructor(currentId = 0)
```

- Creación del contador interno de identificadores:

```js
this.currentId = currentId;
```

- Conservación del arreglo donde se almacenan las tareas:

```js
this.tasks = [];
```

- Creación del método `addTask()` para registrar nuevas tareas:

```js
addTask(nombre, descripcion, fechaEntrega, estado)
```

- Incremento automático del identificador antes de registrar una nueva tarea:

```js
this.currentId++;
```

- Uso del método `push()` para agregar una nueva tarea al arreglo `tasks`.

- Creación de objetos para representar cada nueva tarea.

- Cada objeto de tarea contiene las propiedades:

  - `id`.

  - `nombre`.

  - `descripcion`.

  - `fechaEntrega`.

  - `estado`.

- Asignación automática de un identificador único y consecutivo para cada nueva tarea.

- Definición del estado inicial de las nuevas tareas como:

```js
"PORHACER"
```

- Realización de pruebas programáticas para comprobar el funcionamiento de `TaskManager`.

- Prueba de registro de una primera tarea.

- Prueba de registro de una segunda tarea.

- Comprobación de que la primera tarea obtiene el identificador `1`.

- Comprobación de que la segunda tarea obtiene el identificador `2`.

- Verificación del incremento automático de `currentId`.

- Verificación del contenido almacenado dentro de `taskManager.tasks`.

- Integración de `TaskManager` con el formulario de registro de tareas.

- Conservación de las validaciones realizadas anteriormente en la Tarea 3.

- Creación del objeto `datosTarea` con la información ingresada por el usuario.

- Validación de la información antes de agregar una tarea.

- Ejecución de `taskManager.addTask()` únicamente cuando los datos del formulario son válidos.

- Verificación de que un formulario con información incorrecta no agrega una nueva tarea.

- Uso de `console.log()` para visualizar el arreglo actualizado de tareas durante las pruebas.

- Uso de `formularioTarea.reset()` después de registrar correctamente una tarea.

- Limpieza automática de los campos del formulario después de un registro válido.

- Conservación del mensaje de error cuando la información ingresada no cumple las validaciones.

- Conservación del mensaje de éxito cuando la información es válida.

- Prueba del formulario desde un estado inicial vacío.

- Comprobación de una primera tarea registrada desde el formulario con `id: 1`.

- Comprobación de una segunda tarea registrada desde el formulario con `id: 2`.

- Comprobación del aumento del número de elementos dentro del arreglo `tasks`.

- Prueba de formulario inválido para verificar que el arreglo no aumente.

- Verificación de que la página no se recargue durante el envío del formulario gracias a `event.preventDefault()`.


## Organización del proyecto

La estructura principal del proyecto se encuentra organizada de la siguiente manera:

```text
Gen-c13-Planificador-tareas-web/

├── img/
│   ├── fondo-inicio.webp
│   └── logo-lihen.webp
│
├── js/
│   ├── index.js
│   └── taskManager.js
│
├── index.html
├── styles.css
├── README.md
└── .gitignore
```


### `index.html`

Contiene la estructura principal de la aplicación.

Actualmente incluye:

- Encabezado principal.

- Logo y nombre de la aplicación.

- Navegación interna.

- Sección Inicio.

- Botón Nueva tarea.

- Sección Registrar tarea.

- Formulario de registro.

- Mensajes de validación.

- Sección Mis tareas.

- Tarjetas de tareas de ejemplo.

- Estado visual para cuando no existan tareas.

- Vinculación de los archivos JavaScript del proyecto.


### `styles.css`

Contiene los estilos personalizados de la aplicación.

Actualmente se utiliza para:

- Configurar los colores generales de la página.

- Personalizar el encabezado.

- Configurar el logo.

- Controlar el ancho del contenido principal.

- Personalizar la sección Inicio.

- Utilizar una imagen de fondo en la pantalla inicial.

- Organizar el formulario de registro.

- Personalizar campos del formulario.

- Personalizar botones.

- Configurar la sección Mis tareas.

- Personalizar las tarjetas.

- Configurar el estado sin tareas.

- Complementar los estilos proporcionados por Bootstrap.


### `js/index.js`

Contiene la lógica principal relacionada con la interacción del usuario.

Actualmente permite:

- Seleccionar elementos del HTML mediante JavaScript.

- Capturar la información del formulario.

- Detectar el evento `submit`.

- Evitar la recarga automática de la página.

- Crear el objeto `datosTarea`.

- Validar la información ingresada.

- Mostrar mensajes de error.

- Mostrar mensajes de éxito.

- Crear una instancia de `TaskManager`.

- Registrar nuevas tareas mediante `addTask()`.

- Visualizar las tareas registradas durante las pruebas.

- Limpiar el formulario después de un registro válido.

- Detectar los botones utilizados en las tarjetas.

- Cambiar visualmente el estado de las tareas.


### `js/taskManager.js`

Contiene la clase `TaskManager`.

Actualmente esta clase permite:

- Crear un administrador de tareas.

- Mantener un arreglo de tareas.

- Mantener un contador de identificadores.

- Incrementar el identificador de cada nueva tarea.

- Crear tareas como objetos.

- Asignar identificadores consecutivos.

- Agregar nuevas tareas al arreglo mediante el método `addTask()`.

- Mantener el estado inicial de una nueva tarea como `PORHACER`.


## Tecnologías

- HTML5

- CSS3

- Bootstrap 5

- JavaScript

- Git

- GitHub

- GitHub Pages


## Conceptos trabajados

Durante el desarrollo del proyecto se han aplicado conceptos como:

- Estructura semántica con HTML.

- Formularios HTML.

- Bootstrap.

- CSS personalizado.

- Selectores de CSS.

- Flexbox.

- Manipulación del DOM.

- `document.querySelector()`.

- `document.querySelectorAll()`.

- Eventos con `addEventListener()`.

- Evento `submit`.

- Evento `click`.

- `event.preventDefault()`.

- Funciones.

- Condicionales.

- Objetos.

- Arreglos.

- Clases de JavaScript.

- Constructores.

- Métodos.

- Propiedades.

- `this`.

- `push()`.

- `forEach()`.

- `closest()`.

- `textContent`.

- `classList.add()`.

- `classList.remove()`.

- Contadores.

- Identificadores consecutivos.

- Validación de formularios.


## Estado del proyecto

Sprint 1 finalizado.

Sprint 2 en desarrollo.

Actualmente se encuentra implementada la estructura visual del proyecto, junto con la validación del formulario y las primeras funcionalidades para la administración de tareas mediante JavaScript.

Hasta la Tarea 5 se encuentran implementados:

- La estructura visual principal de la aplicación.

- La navegación entre las diferentes secciones.

- El formulario para registrar tareas.

- Las validaciones de campos obligatorios.

- Las validaciones de longitud mínima.

- Los mensajes específicos de error.

- El mensaje de registro exitoso.

- El cambio visual de estado de las tarjetas.

- La clase `TaskManager`.

- El arreglo `tasks`.

- El contador `currentId`.

- El método `addTask()`.

- La creación de objetos de tarea.

- Los identificadores consecutivos.

- El estado inicial `PORHACER`.

- La integración del formulario con `TaskManager`.

- El registro de tareas únicamente cuando la información es válida.

- La prevención del registro cuando existen errores de validación.

- La limpieza automática del formulario después de un registro correcto.

- Las pruebas necesarias para verificar el funcionamiento desarrollado hasta esta etapa.

El proyecto continuará ampliándose de acuerdo con las siguientes tareas y requerimientos establecidos durante el Bootcamp Full Stack Java de Generation Colombia.


## Enlaces del proyecto


### Repositorio GitHub

[Ver repositorio en GitHub](https://github.com/Lizeth-Londono/Gen-c13-Planificador-tareas-web)


### Demo - GitHub Pages

[Ver aplicación publicada](https://lizeth-londono.github.io/Gen-c13-Planificador-tareas-web/)


### Figma Wireframe

[Ver wireframe en Figma](https://www.figma.com/design/1ukITbrseKkFJCGqMj0SDz/Curso-de-Figma-desde-Cero-%7C-Clase-1--Bases-Fundamentales--2025--con-UI3---Community-?node-id=2021-14&t=3phMiMy3SuSf3zGz-0)


### Trello

[Ver tablero del Sprint 1 en Trello](https://trello.com/b/dptjny67/sprint-1-planificador-de-tareas-web)


## Uso de herramientas de apoyo

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial como apoyo para comprender conceptos, revisar código, resolver dudas, orientar algunos ajustes de estilos CSS y apoyar la organización y redacción del README.

La estructura, decisiones, implementación, pruebas, adaptación visual y ajustes realizados en el proyecto fueron desarrollados y revisados dentro de mi proceso de aprendizaje durante el Bootcamp Full Stack Java de Generation Colombia.