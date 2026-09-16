# Planificador de Tareas Web

Proyecto individual desarrollado durante el Bootcamp Full Stack Java de Generation Colombia.

## Descripción

Aplicación web para crear, visualizar y gestionar tareas.

El proyecto se desarrolló progresivamente mediante las diferentes tareas propuestas durante el bootcamp.

Durante su construcción se incorporaron conceptos de HTML, CSS, Bootstrap, JavaScript, manipulación del DOM, validaciones, eventos, clases, objetos, arreglos, renderizado dinámico, persistencia local, programación asíncrona, API REST, Spring Boot, Spring Data JPA y PostgreSQL.

En las primeras etapas la aplicación utilizó `localStorage` para conservar las tareas dentro del navegador.

En la Tarea 9 la arquitectura evolucionó hacia una aplicación conectada a un backend desarrollado con Spring Boot y una base de datos PostgreSQL.

Actualmente las tareas se crean, consultan, actualizan y eliminan mediante una API REST.

La interfaz utiliza una identidad visual personalizada e inspirada en la gama pastel de LIHEN.

---

# Sprint 1

En este sprint se trabajó en la construcción inicial de la interfaz y en la validación del formulario del Planificador de Tareas.

## Tarea 1

- Creación de la estructura inicial del proyecto.
- Construcción del formulario para registrar una tarea.
- Uso de HTML5 y Bootstrap.
- Creación de los siguientes campos:
  - Nombre de la tarea.
  - Descripción.
  - Fecha de entrega.
  - Estado.
- Creación del botón para registrar una tarea.

## Tarea 2

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

## Tarea 3

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

---

# Sprint 2

En este sprint se incorporó comportamiento dinámico al Planificador de Tareas mediante JavaScript.

Durante esta etapa las tareas se administraron mediante objetos y arreglos y posteriormente se agregó persistencia mediante `localStorage`.

## Tarea 4

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
- Uso de `document.querySelectorAll()`.
- Uso de `forEach()`.
- Uso de `addEventListener("click")`.
- Uso de `closest()`.
- Uso de `querySelector()` dentro de cada tarjeta.
- Cambio visual del estado mediante `textContent`.
- Uso de `classList.remove()` y `classList.add()`.
- Cambio de tareas entre:
  - `PORHACER`.
  - `COMPLETADA`.
- Cambio del texto del botón entre:
  - `Marcar como completada`.
  - `Marcar como pendiente`.

## Tarea 5

- Ampliación de la clase `TaskManager`.
- Incorporación inicial de un contador para generar identificadores:

```js
constructor(currentId = 0)
```

```js
this.currentId = currentId;
```

- Conservación del arreglo:

```js
this.tasks = [];
```

- Creación del método:

```js
addTask(nombre, descripcion, fechaEntrega, estado)
```

- Incremento automático del identificador:

```js
this.currentId++;
```

- Uso de `push()` para agregar tareas al arreglo.
- Creación de objetos para representar cada tarea.
- Incorporación de las propiedades:
  - `id`.
  - `nombre`.
  - `descripcion`.
  - `fechaEntrega`.
  - `estado`.
- Asignación de identificadores únicos y consecutivos.
- Integración de `TaskManager` con el formulario.
- Creación del objeto `datosTarea`.
- Validación antes del registro.
- Uso de `formularioTarea.reset()` después de un registro válido.

## Tarea 6

- Implementación de la funcionalidad para eliminar tareas.
- Creación de `createTaskHtml()` para construir tarjetas dinámicamente.
- Uso de `data-task-id`.
- Creación del botón `Eliminar`.
- Creación del método `deleteTask(taskId)`.
- Uso de delegación de eventos.
- Uso de `event.target`.
- Uso de `classList.contains("delete-button")`.
- Uso de `closest(".card")`.
- Uso de `dataset.taskId`.
- Uso de `Number()`.
- Creación inicial del método `save()`.
- Uso de `JSON.stringify()`.
- Almacenamiento mediante `localStorage`.
- Creación inicial de `load()`.
- Uso de `localStorage.getItem()`.
- Uso de `JSON.parse()`.
- Creación de `render()`.
- Persistencia después de recargar el navegador.

## Tarea 7

En esta tarea se implementó la actualización individual del estado de las tareas creadas dinámicamente.

- Incorporación de `done-button`.
- Conservación temporal de `btn-completar`.
- Conservación de `data-task-id`.
- Creación de `getTaskById(taskId)`.
- Uso de delegación de eventos.
- Recuperación de la tarjeta mediante:

```js
event.target.closest(".card")
```

- Recuperación del identificador mediante `dataset.taskId`.
- Conversión mediante `Number()`.
- Recuperación de la tarea mediante:

```js
taskManager.getTaskById(taskId)
```

- Cambio entre:
  - `PORHACER`.
  - `COMPLETADA`.
- Actualización visual mediante `render()`.
- Persistencia temporal mediante `localStorage`.

## Tarea 8

En esta tarea se completó la etapa de persistencia local mediante `localStorage`.

Se realizaron los siguientes cambios:

- Actualización de `save()` para guardar:
  - El arreglo `tasks`.
  - El contador `currentId`.
- Uso de `JSON.stringify()`.
- Conversión de `currentId` mediante `String()`.
- Recuperación de tareas mediante `JSON.parse()`.
- Conversión de `currentId` nuevamente mediante `Number()`.
- Carga de datos antes del primer `render()`.
- Guardado después de agregar, actualizar o eliminar.
- Corrección del manejador duplicado de `done-button`.
- Recuperación de la eliminación dinámica mediante `delete-button`.
- Validación de continuidad de identificadores después de recargar.

En esta etapa se utilizaron las claves:

```text
tasks
currentId
```

Esta arquitectura corresponde a la evolución histórica del proyecto hasta la Tarea 8.

A partir de la Tarea 9, `localStorage` deja de ser el sistema actual de persistencia y es reemplazado por PostgreSQL.

---

# Sprint 4

En este sprint el Planificador de Tareas evolucionó de una aplicación con persistencia local a una aplicación conectada a un backend desarrollado con Spring Boot y una base de datos PostgreSQL.

La persistencia deja de depender de `localStorage`.

Actualmente las operaciones sobre las tareas se realizan mediante una API REST.

## Tarea 9

En esta tarea se implementó el backend y se realizó la integración completa entre:

```text
Frontend
   ↓
fetch()
   ↓
Spring Boot
   ↓
TaskController
   ↓
TaskRepository
   ↓
PostgreSQL
```

### Backend con Spring Boot

Se creó un nuevo módulo:

```text
backend/
```

El proyecto Spring Boot fue configurado con:

- Maven.
- Java 25.
- Spring Boot.
- Spring Web.
- Spring Data JPA.
- PostgreSQL Driver.
- Validation.

### Base de datos PostgreSQL

Se creó la base de datos:

```text
tasks_db
```

La conexión se configuró mediante:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/tasks_db
spring.datasource.username=postgres
spring.datasource.password=${DB_PASSWORD}
```

La contraseña no se escribe directamente dentro de `application.properties`.

Se utiliza la variable de entorno:

```text
DB_PASSWORD
```

Esto evita almacenar una credencial real dentro del repositorio.

### Entidad Task

Se creó la entidad:

```text
Task
```

con los campos:

```text
id
name
description
dueDate
status
```

El identificador es generado automáticamente mediante PostgreSQL:

```java
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
```

También se incorporaron validaciones mediante:

```java
@NotBlank
@NotNull
```

### TaskRepository

Se creó el repositorio:

```java
public interface TaskRepository extends JpaRepository<Task, Long>
```

Spring Data JPA permite utilizar operaciones CRUD sin escribir manualmente las consultas SQL básicas.

### TaskController

Se creó el controlador REST con la ruta principal:

```text
/api/tasks
```

Se implementaron los siguientes endpoints:

```text
GET    /api/tasks
POST   /api/tasks
PUT    /api/tasks/{id}
DELETE /api/tasks/{id}
```

Las respuestas utilizadas incluyen:

```text
200 OK
201 Created
204 No Content
404 Not Found
```

También se configuró CORS para permitir la comunicación entre el frontend y el backend durante el desarrollo local.

### Integración del frontend

El frontend fue actualizado para utilizar `fetch()`.

La clase `TaskManager` utiliza actualmente:

```text
load()             → GET
addTask()          → POST
toggleTaskStatus() → PUT
deleteTask()       → DELETE
```

Se incorporaron:

- `fetch()`.
- `async`.
- `await`.
- `try`.
- `catch`.
- `response.ok`.
- `response.json()`.
- `JSON.stringify()`.

### Adaptación de datos

El frontend conserva los nombres:

```text
nombre
descripcion
fechaEntrega
estado
```

El backend utiliza:

```text
name
description
dueDate
status
```

`TaskManager` se encarga de transformar la información entre ambos formatos.

### Identificadores

Hasta la Tarea 8, los identificadores se generaban mediante:

```js
currentId
```

En la Tarea 9 este mecanismo fue reemplazado.

Ahora el identificador es generado automáticamente por PostgreSQL.

### Persistencia

La persistencia fue comprobada mediante diferentes pruebas.

Se verificó:

- Crear una tarea desde el frontend.
- Guardarla mediante `POST`.
- Recargar el navegador.
- Confirmar que la tarea continúa almacenada.
- Cambiar su estado mediante `PUT`.
- Recargar el navegador.
- Confirmar que el nuevo estado continúa almacenado.
- Eliminar la tarea mediante `DELETE`.
- Recargar el navegador.
- Confirmar que la tarea no vuelve a aparecer.
- Crear una tarea directamente mediante la API.
- Reiniciar Spring Boot.
- Consultar nuevamente la API.
- Confirmar que la tarea continúa almacenada después del reinicio.

Esto demuestra que la persistencia actual depende de PostgreSQL y no del almacenamiento local del navegador.

### Configuración de IntelliJ IDEA

El backend también fue configurado para ejecutarse directamente desde IntelliJ IDEA.

La configuración utiliza:

```text
Main class:
com.planificador.backend.BackendApplication
```

Módulo:

```text
backend
```

Directorio de trabajo:

```text
backend/
```

Variable de entorno:

```text
DB_PASSWORD
```

La ejecución fue validada correctamente con:

```text
HikariPool-1 - Start completed
Tomcat started on port 8080
Started BackendApplication
```

---

# Organización del proyecto

La estructura principal actual del proyecto es:

```text
Gen-c13-Planificador-tareas-web/
│
├── backend/
│   ├── .mvn/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/planificador/backend/
│   │   │   │       ├── BackendApplication.java
│   │   │   │       ├── controller/
│   │   │   │       │   └── TaskController.java
│   │   │   │       ├── model/
│   │   │   │       │   └── Task.java
│   │   │   │       └── repository/
│   │   │   │           └── TaskRepository.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   │       └── java/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
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

## `index.html`

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

## `styles.css`

Contiene los estilos personalizados.

Actualmente permite:

- Definir una paleta inspirada en LIHEN.
- Configurar colores generales.
- Aplicar degradados pastel.
- Personalizar el encabezado.
- Configurar el logo.
- Controlar el ancho del contenido.
- Personalizar la sección Inicio.
- Utilizar una imagen de fondo.
- Organizar el formulario.
- Personalizar campos y estados de foco.
- Personalizar botones.
- Configurar la sección Mis tareas.
- Personalizar tarjetas.
- Diferenciar visualmente `PORHACER` y `COMPLETADA`.
- Mantener el botón Eliminar como acción destructiva.
- Configurar el estado sin tareas.
- Complementar Bootstrap.
- Incorporar ajustes para pantallas pequeñas.

## `js/index.js`

Contiene la lógica relacionada con la interacción del usuario.

Actualmente permite:

- Seleccionar elementos del HTML.
- Capturar información del formulario.
- Detectar `submit`.
- Utilizar `event.preventDefault()`.
- Crear `datosTarea`.
- Validar información.
- Mostrar mensajes de error.
- Mostrar mensajes de éxito.
- Crear una instancia de `TaskManager`.
- Utilizar funciones `async`.
- Utilizar `await`.
- Manejar errores mediante `try` y `catch`.
- Registrar tareas mediante `addTask()`.
- Recuperar tareas mediante `load()`.
- Actualizar la interfaz mediante `render()`.
- Escuchar eventos dentro de `listaTareas`.
- Detectar `done-button`.
- Detectar `delete-button`.
- Recuperar identificadores mediante `data-task-id`.
- Cambiar estados mediante `toggleTaskStatus()`.
- Eliminar mediante `deleteTask()`.
- Esperar la respuesta del backend antes de actualizar la interfaz.
- Limpiar el formulario después de un registro válido.

## `js/taskManager.js`

Contiene la clase `TaskManager`.

Actualmente permite:

- Mantener temporalmente el arreglo `tasks`.
- Definir la URL de la API:

```text
http://localhost:8080/api/tasks
```

- Crear tareas mediante `addTask()`.
- Enviar tareas mediante `POST`.
- Recuperar tareas mediante `GET`.
- Buscar tareas mediante `getTaskById()`.
- Construir tarjetas mediante `createTaskHtml()`.
- Utilizar `data-task-id`.
- Utilizar `done-button`.
- Utilizar `delete-button`.
- Eliminar tareas mediante `DELETE`.
- Cambiar estados mediante `PUT`.
- Recuperar tareas mediante `load()`.
- Actualizar la interfaz mediante `render()`.
- Utilizar `fetch()`.
- Utilizar `async`.
- Utilizar `await`.
- Verificar respuestas mediante `response.ok`.
- Convertir respuestas mediante `response.json()`.
- Enviar objetos JSON mediante `JSON.stringify()`.
- Adaptar los nombres del frontend a los nombres del backend.
- Mantener sincronizada la interfaz con PostgreSQL mediante la API REST.

## `backend/`

Contiene la aplicación desarrollada con Spring Boot.

Sus componentes principales son:

### `BackendApplication.java`

Punto de entrada de Spring Boot.

### `Task.java`

Entidad JPA que representa una tarea almacenada en PostgreSQL.

### `TaskRepository.java`

Repositorio encargado de acceder a los registros mediante Spring Data JPA.

### `TaskController.java`

Controlador REST encargado de recibir las peticiones HTTP realizadas desde el frontend.

### `application.properties`

Contiene la configuración de:

- Nombre de la aplicación.
- Conexión con PostgreSQL.
- Variable de entorno `DB_PASSWORD`.
- JPA.
- Hibernate.

---

# 🎨 Paleta visual

El Planificador de Tareas utiliza una identidad visual inspirada en la gama pastel de LIHEN.

La paleta combina rosa pastel, verde lima claro, blanco perla, gris nube, coral suave y dorado cobrizo.

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

---

# Tecnologías

- HTML5.
- CSS3.
- Bootstrap 5.
- JavaScript.
- Java 25.
- Spring Boot.
- Spring Web.
- Spring Data JPA.
- Jakarta Validation.
- PostgreSQL.
- Maven.
- API REST.
- Git.
- GitHub.
- GitHub Pages.
- IntelliJ IDEA.

---

# Conceptos trabajados

Durante el desarrollo del proyecto se aplicaron conceptos de frontend, backend, persistencia y control de versiones.

Entre ellos:

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
- `filter()`.
- `map()`.
- `forEach()`.
- `for...of`.
- `closest()`.
- `textContent`.
- `classList.add()`.
- `classList.remove()`.
- `classList.contains()`.
- `dataset`.
- Atributos `data-*`.
- `Number()`.
- `innerHTML`.
- Template literals.
- Interpolación mediante `${ }`.
- Renderizado dinámico.
- Validación de formularios.

Conceptos trabajados durante la etapa de persistencia local:

- `localStorage`.
- `localStorage.setItem()`.
- `localStorage.getItem()`.
- `JSON.stringify()`.
- `JSON.parse()`.
- Contadores.
- Identificadores consecutivos.

Conceptos incorporados con la Tarea 9:

- Arquitectura frontend-backend.
- API REST.
- CRUD.
- Métodos HTTP.
- `GET`.
- `POST`.
- `PUT`.
- `DELETE`.
- Códigos de estado HTTP.
- `fetch()`.
- Programación asíncrona.
- `async`.
- `await`.
- `try`.
- `catch`.
- `response.ok`.
- `response.json()`.
- JSON entre frontend y backend.
- Spring Boot.
- Spring Web.
- Controladores REST.
- `@RestController`.
- `@RequestMapping`.
- `@GetMapping`.
- `@PostMapping`.
- `@PutMapping`.
- `@DeleteMapping`.
- `@RequestBody`.
- `@PathVariable`.
- `@Valid`.
- CORS.
- Spring Data JPA.
- `JpaRepository`.
- Entidades JPA.
- `@Entity`.
- `@Table`.
- `@Id`.
- `@GeneratedValue`.
- PostgreSQL.
- Persistencia en base de datos.
- Variables de entorno.
- Maven.

---

# Estado del proyecto

Las funcionalidades correspondientes a las Tareas 1–9 se encuentran actualmente integradas en la rama de desarrollo de la Tarea 9.

Entre las funcionalidades incorporadas se encuentran:

- Estructura visual.
- Navegación entre secciones.
- Formulario para registrar tareas.
- Validaciones.
- Mensajes de error.
- Mensajes de éxito.
- Clase `TaskManager`.
- Arreglo temporal `tasks`.
- Método `addTask()`.
- Método `getTaskById()`.
- Método `createTaskHtml()`.
- Método `deleteTask()`.
- Método `toggleTaskStatus()`.
- Método `load()`.
- Método `render()`.
- Creación dinámica de tarjetas.
- Eliminación individual.
- Actualización individual de estados.
- `done-button`.
- `delete-button`.
- `data-task-id`.
- Delegación de eventos.
- Backend Spring Boot.
- Base de datos PostgreSQL.
- Entidad `Task`.
- Repositorio `TaskRepository`.
- Controlador `TaskController`.
- API REST.
- `GET`.
- `POST`.
- `PUT`.
- `DELETE`.
- Comunicación mediante `fetch()`.
- Programación asíncrona.
- Persistencia en PostgreSQL.
- Persistencia después de recargar el navegador.
- Persistencia después de reiniciar Spring Boot.
- Variable de entorno `DB_PASSWORD`.
- Ejecución del backend desde IntelliJ IDEA.
- Identidad visual inspirada en LIHEN.
- Ajustes para diferentes tamaños de pantalla.

## Rama actual de la Tarea 9

```text
tarea9-backend
```

Avances principales registrados:

```text
6aadd41  Avance tarea 9 de backend SpringBoot y PostgreSQL
5eb6635  Avance tarea 9 integración frontend con API REST
```

La rama local `tarea9-backend` y la rama remota `origin/tarea9-backend` se encuentran sincronizadas.

---

# Ejecución del proyecto

## Backend

La base de datos PostgreSQL utilizada es:

```text
tasks_db
```

Antes de ejecutar el backend se debe configurar la variable de entorno:

```text
DB_PASSWORD
```

La aplicación Spring Boot utiliza:

```text
http://localhost:8080
```

La API está disponible en:

```text
http://localhost:8080/api/tasks
```

## Frontend

El frontend puede abrirse mediante un servidor local.

Para utilizar todas las funcionalidades de persistencia de la Tarea 9, el backend Spring Boot debe estar ejecutándose y conectado a PostgreSQL.

---

# Enlaces del proyecto

## Repositorio GitHub

[Ver repositorio en GitHub](https://github.com/Lizeth-Londono/Gen-c13-Planificador-tareas-web)

## Demo — GitHub Pages

[Ver interfaz publicada](https://lizeth-londono.github.io/Gen-c13-Planificador-tareas-web/)

> Nota: GitHub Pages publica archivos estáticos del frontend. Las funcionalidades que dependen del backend de Spring Boot y PostgreSQL requieren que la API esté ejecutándose en un entorno accesible.

## Figma Wireframe

[Ver wireframe en Figma](https://www.figma.com/design/1ukITbrseKkFJCGqMj0SDz/Curso-de-Figma-desde-Cero-%7C-Clase-1--Bases-Fundamentales--2025--con-UI3---Community-?node-id=2021-14&t=3phMiMy3SuSf3zGz-0)

## Trello

[Ver tablero del Sprint 1 en Trello](https://trello.com/b/dptjny67/sprint-1-planificador-de-tareas-web)

---

# Uso de herramientas de apoyo

Durante el desarrollo del proyecto se utilizaron herramientas de inteligencia artificial como apoyo para:

- Comprender conceptos.
- Revisar código.
- Resolver dudas.
- Orientar ajustes de estilos CSS.
- Analizar integraciones.
- Comprender la conexión entre frontend, backend y base de datos.
- Organizar y redactar documentación.

La estructura, las decisiones, la implementación, las pruebas, la adaptación visual y los ajustes del proyecto fueron desarrollados y revisados dentro de mi proceso de aprendizaje durante el Bootcamp Full Stack Java de Generation Colombia.
