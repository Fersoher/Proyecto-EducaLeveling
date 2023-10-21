# Proyecto-EducaLeveling

### Introducción
We created a project guided towards the creation of a database aimed at helping educational centers with respect to planning the school year and student learning, facilitating access to lessons and activities.

### Project Support Features
* Users can register and log in.
* The platform differentiates between users when it comes to permissions.

### Installation Guide
* Clone this repository [here](https://github.com/blackdevelopa/ProjectSupport.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman on port 7066.

### Project Idea:
This project consists of creating an API that facilitates the management of medical appointments for a veterinary clinic. The clinic will control the registration of owners and pets, appointments, treatment follow-up and the assignment of veterinarians. Owners will be able to request appointments for their pets, as well as consult their record at any time and the information of the veterinarians and treatments available at the clinic.

Roles: There will be 3 main roles:
- Admin: This role has full permissions. It can view, create, update and delete information from all tables.
- Personnel (clinic staff): This role can see all the information. Create, update and delete pets, owners, contact details, appointments. You can view vet and treatment information, but you can NOT create, update, or delete it.
- User (pet owner): This role can view all vet and treatment information. But you can only see your own appointments, pets and contact information (not other users). Likewise, you can only create, update and delete your own data. You have access to the information of all available appointments and the possibility to update the "status" field of the appointments when you select one to book for your pet, so that its status changes to "not available".

### Tables:
<!--  ![image](https://github.com/VeronicaRamirezMoreno/Project-2-API-Rest/assets/122170615/90340a1a-4d1a-4309-84b2-433e8c73ae00)
 -->

### Relationships between tables:

Ref: Empleados.id < AsignaturaProfesor.profesores_id
Ref: Asignaturas.id < AsignaturaProfesor.asignaturas_id

Ref: Asignaturas.id < AsignaturaCurso.asignaturas_id
Ref: Curso.id < AsignaturaCurso.curso_id
Ref: Alumnos.id > Curso.alumno_id


Ref: Equipamiento.alumnos_id - Alumnos.id
Ref: ActividadesYExamenes.alumno_id > Alumnos.id
Ref: ActividadesYExamenes.profesor_id > Empleados.id
Ref: Asignaturas.asignatura < ActividadesYExamenes.asignatura


##  EducaLeveling Endpoints

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION              | POST PARAMS                                               | RETURNS
-------|------------------|-------|-------|--------------------------|-----------------------------------------------------------|--------------------
POST   | /auth/signup     | -     | admin | User Signup              | `nombre`, `apellidos`, `email`, `telefono`, `contraseña`  | { token: `token` }
POST   | /auth/login      | -     | admin | User Login               | `email`, `contraseña`                                     | { token: `token` }


### Empleados Endpoints 

METHOD | ENDPOINT               | TOKEN | ROLE      | DESCRIPTION              | POST PARAMS                                  | RETURNS
-------|------------------------|-------|-----------|--------------------------|----------------------------------------------|--------------------
GET    | /empleado              | YES   | admin     | Get All empleados        |  `query params`                              | [{empleado}]
GET    | /empleado/:empleadoId  | YES   | admin     | Get One empleado         |                                              | {empleado}
GET    | /empleado/profile      | YES   | empleado  | Get Own Profile          |                                              | {empleado}
GET    | /empleado/asignatura   | YES   | empleado  | Get Own asignaturas      |                                              | [{asignatura}]
GET    | /empleado/curso        | YES   | empleado  | Get Own cursos           |                                              | [{curso}]
GET    | /empleado/test         | YES   | empleado  | Get Own tests            |                                              | [{test}]
POST   | /empleado              | YES   | admin     | Create one empleado      | `nombre`, `apellidos`, `email`, `telefono`   | {empleado}
PUT    | /empleado/profile      | YES   | empleado  | Update own empleado      | `nombre`, `apellidos`, `email`, `telefono`   | {message: 'empleado updated'}
PUT    | /empleado/:empleadoId  | YES   | admin     | Update empleado          | `nombre`, `apellidos`, `email`, `telefono`   | {message: 'empleado updated'}
DELETE | /empleado/:empleadoId  | YES   | admin     | Delete own profile       |                                              | { message: 'Profile deleted' }

### Alumno Endpoints 

METHOD | ENDPOINT            | TOKEN | ROLE     | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|---------------------|-------|----------|--------------------------|-------------------------------------------------|--------------------
GET    | /alumno             | YES   | admin    | Get All alumnos          |  `query params`                                 | [{alumno}]
GET    | /alumno/:alumnoId   | YES   | empleado | Get One alumno           |                                                 | {alumno}
GET    | /alumno/profile     | YES   | alumno   | Get Own Profile          |                                                 | {alumno}
GET    | /alumno/tests       | YES   | alumno   | Get Own tests            |                                                 | [{test}]
GET    | /alumno/asignatura  | YES   | empleado | Get Own asignaturas      |                                                 | [{asignatura}]
GET    | /alumno/curso       | YES   | empleado | Get Own cursos           |                                                 | [{asignatura}]
POST   | /alumno             | YES   | admin    | Create one alumno        | `nombre`, `apellidos`, `email`, `contraseña`  | {alumno}
PUT    | /alumno/profile     | YES   | alumno   | Update own alumno        | `nombre`, `apellidos`, `email`, `contraseña`  | {message: 'alumno updated'}
PUT    | /alumno/:alumnoId   | YES   | admin    | Update own alumno        | `nombre`, `apellidos`, `email`, `contraseña`  | {message: 'alumno updated'}
DELETE | /alumno/:alumnoId   | YES   | admin    | Delete own profile       |                                                 | { message: 'Profile deleted' }

### Asignaturas Endpoints

METHOD | ENDPOINT                   | TOKEN | ROLE  | DESCRIPTION               | POST PARAMS       | RETURNS
-------|----------------------------|-------|-------|---------------------------|-------------------|--------------------
GET    | /asignatura                | YES   | admin | Get All asignaturas       |  `query params`   | [{asignatura}]
GET    | /asignatura/:asignaturaId  | YES   | admin | Get One asignatura        |                   | {asignatura}
POST   | /asignatura                | YES   | admin | Create one asignatura     | `asignatura`      | {asignatura}
PUT    | /asignatura/:asignaturaId  | YES   | admin | Update one asignatura     | `asignatura`      | {message: 'asignatura updated'}
DELETE | /asignatura/:asignaturaId  | YES   | admin | Delete one asignatura     |                   | {message: 'asignatura deleted'}


### Cursos Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS             | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------|--------------------
GET    | /curso                | YES   | admin     | Get All cursos       |  `query params`   | [{curso}]
GET    | /curso/:cursoId       | YES   | admin     | Get One curso        |                   | {curso}
POST   | /curso                | YES   | admin     |  Create one curso    | `curso`, `alumno` | {curso}
PUT    | /curso/:cursoId       | YES   | admin     |  Update one curso    | `curso`, `alumno` | {message: 'curso updated'}
DELETE | /curso/:cursoId       | YES   | admin     | Delete one curso     |                   | {message: 'curso deleted'}


### ActividadesYExamenes Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE     | DESCRIPTION          | POST PARAMS                                                                  | RETURNS
-------|------------------|-------|------    |----------------------|------------------------------------------------------------------------------|--------------------
GET    | /test            | YES   | admin    | Get All tests        |  `query params`                                                              | [{test}]
GET    | /test/:testId    | YES   | admin    | Get One test         |                                                                              | {test}
GET    | /test/available  | YES   | alumno   | Get available tests  |                                                                              | [{test}]
POST   | /test            | YES   | empleado | Create one test      | `alumno`, `profesor`, `asignatura`, `actividad`, `nota individual`,  `fecha` | {test}
PUT    | /test/available  | YES   | alumno   | Update own test      | `status`                                                                     | {message: 'test updated'}
PUT    | /test/:testId    | YES   | empleado | Update one test      | `alumno`, `profesor`, `asignatura`, `actividad`, `nota individual`,  `fecha` | {message: 'test updated'}
DELETE | /test/:testId    | YES   | empleado | Delete one test      |                                                                              | {message: 'test deleted'}


### Equipamiento Endpoints

METHOD | ENDPOINT                       | TOKEN | ROLE      | DESCRIPTION              | POST PARAMS                                                 | RETURNS
-------|--------------------------------|-------|-----------|--------------------------|-------------------------------------------------------------|--------------------
GET    | /equipamiento                  | YES   | alumno    | Get All equipamiento     |  `query params`                                             | [{equipamiento}]
GET    | /equipamiento/:equipamientoId  | YES   | empleado  | Get One equipamiento     |                                                             | {equipamiento}
POST   | /equipamiento                  | YES   | admin     | Create one equipamiento  | `alumno`,`nombre`, `fecha de entrega`, `fecha de devolucion`| {equipamiento}
PUT    | /equipamiento/:equipamientoId  | YES   | empleado  | Update one equipamiento  | `alumno`,`nombre`, `fecha de entrega`, `fecha de devolucion`| {message: 'equipamiento updated'}
DELETE | /equipamiento/:equipamientoId  | YES   | admin     | Delete one equipamiento  |                                                             | {message: 'equipamiento deleted'}

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### License
This project is available for use under the MIT License.
