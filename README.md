# Planificador de Tareas Web

Proyecto individual desarrollado durante el Bootcamp Full Stack Java de Generation Colombia.

## Descripción

Aplicación web para crear, visualizar y gestionar tareas.

El proyecto se desarrolló progresivamente mediante las diferentes tareas propuestas durante el bootcamp. En su construcción se incorporaron estructura visual, formularios, validaciones, eventos, clases, objetos, arreglos, renderizado dinámico, persistencia de información y administración de tareas mediante JavaScript.

La interfaz utiliza una identidad visual personalizada e inspirada en la gama pastel de LIHEN.


## Sprint 1

En este sprint se trabajó en la construcción inicial de la interfaz y en la validación del formulario del Planificador de Tareas.


### Tarea 1

- Creación de la estructura inicial del proyecto.
- Construcción del formulario para registrar una tarea.
- Uso de HTML5 y Bootstrap.
- Creación de los siguientes campos:
  - Nombre de la tarea.
  - Descripción.
  - Fecha de entrega.
  - Estado.
- Creación del botón para registrar una tarea.


### Tarea 2

- Creación del componente visual de tarjeta utilizando Bootstrap Card.
- Construcción del contenedor `listaTareas`.
- Creación de cinco tareas de ejemplo con información diferente.
- Visualización de:
  - Nombre de la tarea.
  - Descripción.
  - Fecha de entrega.
  - Estado.
- Uso de Bootstrap Badge para representar visualmente los estados.
- Aplicación de estilos personalizados mediante CSS.
- Adaptación visual basada en el wireframe realizado en Figma.
- Preparación de las siguientes secciones:
  - Inicio.
  - Registrar tarea.
  - Mis tareas.
  - Estado sin tareas.
- Preparación de navegación interna mediante enlaces HTML.


### Tarea 3

- Vinculación del archivo `js/index.js` con el proyecto.
- Uso de `document.querySelector()` para obtener los campos del formulario.
- Captura de la información ingresada por el usuario.
- Uso del evento `submit` para validar el formulario.
- Uso de `event.preventDefault()` para evitar la recarga automática de la página.
- Creación de la función `validFormFieldInput(data)`.
- Validación de los siguientes campos obligatorios:
  - Nombre de la tarea.
  - Descripción.
  - Fecha de entrega.
  - Estado.
- Validación de longitud mínima:
  - Nombre de la tarea: mínimo 3 caracteres.
  - Descripción: mínimo 5 caracteres.
- Creación de mensajes específicos de validación.
- Creación de un mensaje de éxito cuando la información ingresada es correcta.
- Uso de clases de Bootstrap para mostrar y ocultar los mensajes.
- Pruebas con información correcta e incorrecta.


## Sprint 2

En este sprint se incorporó comportamiento dinámico al Planificador de Tareas mediante JavaScript.

La aplicación permite administrar tareas almacenadas en objetos y arreglos, cambiar sus estados, eliminar registros y conservar la información después de recargar la página.


### Tarea 4

- Creación del archivo `js/taskManager.js`.
- Creación de la clase `TaskManager`.
- Creación del constructor de la clase.
- Creación del arreglo inicial donde se almacenan las tareas:

```js
this.tasks = [];
```

- Creación de una instancia de `TaskManager` desde `js/index.js`.
- Verificación inicial del arreglo mediante la consola.
- Uso de JavaScript para trabajar con los botones de las tarjetas.
- Uso de `document.querySelectorAll()` para seleccionar varios botones.
- Uso de `forEach()` para recorrer los botones encontrados.
- Uso de `addEventListener("click")` para detectar los clics.
- Uso de `closest()` para identificar la tarjeta seleccionada.
- Uso de `querySelector()` dentro de cada tarjeta.
- Cambio visual del estado mediante `textContent`.
- Uso de `classList.remove()` y `classList.add()`.
- Cambio de las tareas entre los estados:
  - `PORHACER`.
  - `COMPLETADA`.
- Cambio del texto del botón entre:
  - `Marcar como completada`.
  - `Marcar como pendiente`.
- Pruebas individuales sobre las tarjetas.


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

- Creación del método `addTask()`:

```js
addTask(nombre, descripcion, fechaEntrega, estado)
```

- Incremento automático del identificador:

```js
this.currentId++;
```

- Uso de `push()` para agregar una tarea al arreglo.
- Creación de objetos para representar cada tarea.
- Incorporación de las siguientes propiedades:
  - `id`.
  - `nombre`.
  - `descripcion`.
  - `fechaEntrega`.
  - `estado`.
- Asignación de identificadores únicos y consecutivos.
- Definición del estado inicial:

```js
"PORHACER"
```

- Integración de `TaskManager` con el formulario.
- Creación del objeto `datosTarea`.
- Validación de la información antes de registrar la tarea.
- Ejecución de `taskManager.addTask()` cuando la información es válida.
- Prevención del registro cuando existen errores.
- Uso de `formularioTarea.reset()` después de un registro válido.
- Conservación de los mensajes de error y éxito.
- Pruebas del incremento de `currentId`.
- Pruebas de registro con formularios válidos e inválidos.


### Tarea 6

- Implementación de la funcionalidad para eliminar tareas.
- Creación del método `createTaskHtml()` para construir tarjetas dinámicamente.
- Uso de `data-task-id` para relacionar cada tarjeta con su tarea.
- Creación del botón `Eliminar` dentro de las tarjetas dinámicas.
- Creación del método `deleteTask(taskId)`.
- Uso de un arreglo nuevo para conservar las tareas no eliminadas.
- Actualización del arreglo principal `this.tasks`.
- Uso de un listener sobre el contenedor `listaTareas`.
- Uso de `event.target` para identificar el elemento seleccionado.
- Uso de `classList.contains("delete-button")`.
- Uso de `closest(".card")` para encontrar la tarjeta.
- Uso de `dataset.taskId` para recuperar el identificador.
- Uso de `Number()` para convertir el identificador a número.
- Creación del método `save()`.
- Uso de `JSON.stringify()` para convertir las tareas en texto.
- Almacenamiento de las tareas en `localStorage`.
- Creación del método `load()`.
- Uso de `localStorage.getItem()` para recuperar la información.
- Uso de `JSON.parse()` para reconstruir el arreglo.
- Recuperación del identificador más alto después de cargar las tareas.
- Creación del método `render()`.
- Uso de `innerHTML` para reconstruir la lista de tareas.
- Persistencia de las tareas después de recargar.
- Persistencia de las eliminaciones.
- Conservación del cambio de estado.
- Pruebas de eliminación individual y de varias tareas.


### Tarea 7

En esta tarea se implementó la actualización individual del estado de las tareas creadas dinámicamente.

- Incorporación de la clase `done-button` al botón generado desde `createTaskHtml()`.
- Conservación temporal de la clase `btn-completar` para mantener los estilos existentes.
- Conservación del atributo `data-task-id` en cada tarjeta.
- Creación del método `getTaskById(taskId)` dentro de `TaskManager`.
- Búsqueda de una tarea mediante su identificador único.
- Uso de delegación de eventos desde el contenedor `listaTareas`.
- Identificación del botón mediante:

```js
event.target.classList.contains("done-button")
```

- Recuperación de la tarjeta mediante:

```js
event.target.closest(".card")
```

- Lectura del identificador almacenado en `data-task-id`.
- Conversión del identificador mediante `Number()`.
- Recuperación de la tarea exacta mediante:

```js
taskManager.getTaskById(taskId)
```

- Cambio del estado entre:
  - `PORHACER`.
  - `COMPLETADA`.
- Actualización del texto del botón entre:
  - `Marcar como completada`.
  - `Marcar como pendiente`.
- Guardado del nuevo estado mediante `taskManager.save()`.
- Actualización de la interfaz mediante `taskManager.render()`.
- Persistencia del cambio después de recargar la aplicación.
- Conservación del funcionamiento de `delete-button`.
- Conservación de la estructura de los objetos de tarea.
- Conservación de la clave utilizada en `localStorage`.


### Tarea 8

En esta tarea se completó la persistencia de la aplicación mediante `localStorage`.

Se realizaron los siguientes cambios:

- Actualización de `save()` para guardar tanto el arreglo `tasks` como el contador `currentId`.
- Conversión de las tareas a texto mediante `JSON.stringify()`.
- Conversión de `currentId` a texto mediante `String()` antes de almacenarlo.
- Actualización de `load()` para recuperar y reconstruir las tareas mediante `JSON.parse()`.
- Conversión de `currentId` nuevamente a número mediante `Number()`.
- Carga de los datos antes del primer `render()` de la aplicación.
- Guardado después de agregar, actualizar o eliminar una tarea.
- Corrección del manejador duplicado de `done-button`, que podía cambiar dos veces el estado con un solo clic.
- Recuperación de la eliminación dinámica mediante `delete-button`.
- Validación de que los identificadores continúen su secuencia después de recargar la página.

La información se almacena con las claves:

- `tasks`: contiene la lista de tareas serializada en formato JSON.
- `currentId`: conserva el último identificador utilizado.

Esto permite mantener las tareas, sus estados y la secuencia de identificadores al recargar o volver a abrir la aplicación.

La integración fue comprobada visualmente creando varias tareas y cambiando individualmente el estado de una de ellas. La tarjeta seleccionada cambió a `COMPLETADA`, mientras las demás conservaron el estado `PORHACER`.


## Organización del proyecto

La estructura principal del proyecto se encuentra organizada así:

```text
Gen-c13-Planificador-tareas-web/
│
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
- Contenedor `listaTareas`.
- Estado visual para cuando no existan tareas.
- Vinculación de los archivos JavaScript.


### `styles.css`

Contiene los estilos personalizados de la aplicación.

Actualmente permite:

- Definir una paleta inspirada en LIHEN mediante variables CSS.
- Configurar los colores generales.
- Aplicar un fondo con degradados pastel.
- Personalizar el encabezado.
- Configurar el logo.
- Controlar el ancho del contenido principal.
- Personalizar la sección Inicio.
- Utilizar una imagen de fondo.
- Ubicar el mensaje de bienvenida en el costado derecho en escritorio.
- Evitar que el mensaje cubra el logo central de LIHEN.
- Devolver el mensaje al centro en pantallas pequeñas.
- Organizar el formulario.
- Personalizar los campos y sus estados de foco.
- Personalizar botones.
- Configurar la sección Mis tareas.
- Personalizar tarjetas.
- Diferenciar los estados `PORHACER` y `COMPLETADA`.
- Mantener el botón Eliminar como una acción destructiva reconocible.
- Configurar el estado sin tareas.
- Complementar los estilos de Bootstrap.
- Incorporar ajustes controlados para pantallas pequeñas.


### `js/index.js`

Contiene la lógica relacionada con la interacción del usuario.

Actualmente permite:

- Seleccionar elementos del HTML.
- Capturar la información del formulario.
- Detectar el evento `submit`.
- Evitar la recarga durante la validación.
- Crear el objeto `datosTarea`.
- Validar la información ingresada.
- Mostrar mensajes de error y éxito.
- Crear una instancia de `TaskManager`.
- Registrar tareas mediante `addTask()`.
- Guardar las tareas mediante `save()`.
- Recuperar las tareas mediante `load()`.
- Actualizar la lista mediante `render()`.
- Escuchar los clics dentro de `listaTareas`.
- Identificar el botón seleccionado mediante `event.target`.
- Detectar `done-button`.
- Detectar `delete-button`.
- Recuperar el identificador mediante `data-task-id`.
- Recuperar una tarea mediante `getTaskById()`.
- Eliminar tareas mediante `deleteTask()`.
- Cambiar individualmente el estado de las tareas.
- Mantener sincronizada la interfaz con `localStorage`.
- Limpiar el formulario después de un registro válido.


### `js/taskManager.js`

Contiene la clase `TaskManager`.

Actualmente permite:

- Crear un administrador de tareas.
- Mantener el arreglo `tasks`.
- Mantener el contador `currentId`.
- Incrementar el identificador de cada tarea.
- Crear tareas como objetos.
- Asignar identificadores consecutivos.
- Agregar tareas mediante `addTask()`.
- Buscar tareas mediante `getTaskById()`.
- Construir tarjetas mediante `createTaskHtml()`.
- Incorporar `data-task-id` en cada tarjeta.
- Incorporar `done-button` al botón de estado.
- Incorporar `delete-button` al botón Eliminar.
- Eliminar tareas mediante `deleteTask()`.
- Cambiar estados mediante `toggleTaskStatus()`.
- Guardar información mediante `save()`.
- Recuperar información mediante `load()`.
- Actualizar la interfaz mediante `render()`.
- Mantener el estado inicial `PORHACER`.
- Mantener la persistencia de las tareas.


## 🎨 Paleta visual

El Planificador de Tareas utiliza una identidad visual inspirada en la gama pastel de LIHEN.

La paleta combina rosa pastel, verde lima claro, blanco perla, gris nube, coral suave y dorado cobrizo.

Los colores funcionales se conservan para diferenciar las tareas pendientes, las completadas y la acción de eliminar.

```css
:root {
    --color-fondo-perla: #ebe6eb;
    --color-rosa-lihen: #eeb8e1;
    --color-verde-lihen: #e2fcb6;
    --color-coral: #d69275;
    --color-nube: #bdc1cb;
    --color-dorado: #a87339;
    --color-texto: #2b2b2b;
    --color-texto-suave: #56505a;
    --color-superficie: #ffffff;
    --color-superficie-transparente: rgba(255, 255, 255, 0.78);
    --color-pendiente: #ffc107;
    --color-completada: #198754;
    --color-eliminar: #dc3545;
    --color-foco: #d69275;
}
```

Funciones principales:

- `--color-fondo-perla`: fondo general.
- `--color-rosa-lihen`: identidad y acciones principales.
- `--color-verde-lihen`: acento visual.
- `--color-coral`: interacción del botón principal.
- `--color-nube`: bordes y elementos secundarios.
- `--color-dorado`: detalles de marca y foco de teclado.
- `--color-texto`: contenido principal.
- `--color-texto-suave`: información secundaria.
- `--color-superficie`: formularios, tarjetas y contenedores.
- `--color-pendiente`: estado `PORHACER`.
- `--color-completada`: estado `COMPLETADA`.
- `--color-eliminar`: acciones destructivas.
- `--color-foco`: identificación del campo activo.


## Tecnologías

- HTML5.
- CSS3.
- Bootstrap 5.
- JavaScript.
- Git.
- GitHub.
- GitHub Pages.


## Conceptos trabajados

Durante el desarrollo del proyecto se aplicaron los siguientes conceptos:

- Estructura semántica con HTML.
- Formularios HTML.
- Bootstrap.
- CSS personalizado.
- Variables CSS.
- Selectores CSS.
- Flexbox.
- Media queries.
- Manipulación del DOM.
- `document.querySelector()`.
- `document.querySelectorAll()`.
- Eventos mediante `addEventListener()`.
- Evento `submit`.
- Evento `click`.
- `event.preventDefault()`.
- `event.target`.
- Delegación de eventos.
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
- `for...of`.
- `closest()`.
- `textContent`.
- `classList.add()`.
- `classList.remove()`.
- `classList.contains()`.
- Contadores.
- Identificadores consecutivos.
- Validación de formularios.
- `localStorage`.
- `localStorage.setItem()`.
- `localStorage.getItem()`.
- `JSON.stringify()`.
- `JSON.parse()`.
- `dataset`.
- Atributos `data-*`.
- `Number()`.
- `innerHTML`.
- Template literals.
- Interpolación mediante `${ }`.
- Renderizado dinámico.
- Persistencia de datos.
- Búsqueda mediante identificadores.
- Eliminación individual de tareas.
- Actualización individual de tareas.
- Cambio y persistencia de estados.


## Estado del proyecto

Las funcionalidades correspondientes a las Tareas 1–8 se encuentran integradas en el código local actual.

Entre las funcionalidades incorporadas se encuentran:

- Estructura visual de la aplicación.
- Navegación entre secciones.
- Formulario para registrar tareas.
- Validaciones de campos obligatorios.
- Validaciones de longitud mínima.
- Mensajes específicos de error.
- Mensaje de registro exitoso.
- Clase `TaskManager`.
- Arreglo `tasks`.
- Contador `currentId`.
- Método `addTask()`.
- Método `getTaskById()`.
- Método `createTaskHtml()`.
- Método `deleteTask()`.
- Método `toggleTaskStatus()`.
- Método `save()`.
- Método `load()`.
- Método `render()`.
- Identificadores consecutivos.
- Estado inicial `PORHACER`.
- Creación dinámica de tarjetas.
- Eliminación individual de tareas.
- Actualización individual del estado.
- Persistencia mediante `localStorage`.
- Uso de `done-button`.
- Uso de `delete-button`.
- Uso de `data-task-id`.
- Uso de delegación de eventos.
- Identidad visual inspirada en LIHEN.
- Ajustes CSS para diferentes tamaños de pantalla.

La implementación de la Tarea 8 y la personalización visual se encuentran en el espacio de trabajo local.

Su publicación en GitHub quedará confirmada únicamente después de revisar los cambios, crear el commit y ejecutar el push correspondiente.


## Enlaces del proyecto

### Repositorio GitHub

[Ver repositorio en GitHub](https://github.com/Lizeth-Londono/Gen-c13-Planificador-tareas-web)


### Demo — GitHub Pages

[Ver aplicación publicada](https://lizeth-londono.github.io/Gen-c13-Planificador-tareas-web/)


### Figma Wireframe

[Ver wireframe en Figma](https://www.figma.com/design/1ukITbrseKkFJCGqMj0SDz/Curso-de-Figma-desde-Cero-%7C-Clase-1--Bases-Fundamentales--2025--con-UI3---Community-?node-id=2021-14&t=3phMiMy3SuSf3zGz-0)


### Trello

[Ver tablero del Sprint 1 en Trello](https://trello.com/b/dptjny67/sprint-1-planificador-de-tareas-web)


## Uso de herramientas de apoyo

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial como apoyo para:

- Comprender conceptos.
- Revisar código.
- Resolver dudas.
- Orientar ajustes de estilos CSS.
- Analizar integraciones.
- Organizar y redactar la documentación.

La estructura, las decisiones, la implementación, las pruebas, la adaptación visual y los ajustes del proyecto fueron desarrollados y revisados dentro de mi proceso de aprendizaje durante el Bootcamp Full Stack Java de Generation Colombia.
