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

### EducaLeveling


#### Profesores
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /educaleveling/profesores | To create a new |
| GET | /educaleveling/profesores | muestra todos los campos|
| GET | /educaleveling/profesores/:Id | muestra solo un campo id  |
| PUT | /educaleveling/profesores/:Id | actualiza el campo id|
| DELETE | /educaleveling/profesores/:Id | Elimina un campo id |
| GET | /educaleveling/profesores/profile | muestra solo un campo id  |


#### Asignaturas
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /educaleveling/asignaturas | To create a new |
| GET | /educaleveling/asignaturas | muestra todos los campos|
| GET | /educaleveling/asignaturas/:Id | muestra solo un campo id  |
| PUT | /educaleveling/asignaturas/:Id | actualiza el campo id|
| DELETE | /educaleveling/asignaturas/:Id | Elimina un campo id |


#### Curso
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /educaleveling/curso | To create a new |
| GET | /educaleveling/curso  | muestra todos los campos|
| GET | /educaleveling/curso /:Id | muestra solo un campo id  |
| PUT | /educaleveling/curso /:Id | actualiza el campo id|
| DELETE | /educaleveling/curso /:Id | Elimina un campo id |


#### Alumnos
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /educaleveling/alumnos | To create a new |
| GET | /educaleveling/alumnos  | muestra todos los campos|
| GET | /educaleveling/alumnos /:Id | muestra solo un campo id  |
| PUT | /educaleveling/alumnos /:Id | actualiza el campo id|
| DELETE | /educaleveling/alumnos /:Id | Elimina un campo id |


#### Equipamiento
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /educaleveling/equipamiento | To create a new  |
| GET | /educaleveling/equipamiento | muestra todos los campos |
| GET | /educaleveling/equipamiento/:Id | muestra solo un campo id |
| PUT | /educaleveling/equipamiento/:Id | actualiza el campo id|
| DELETE | /educaleveling/equipamiento/:Id | Elimina un campo id  |


#### ActividadesYExamenes 
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /educaleveling/test | To create a new  |
| GET | /educaleveling/test | muestra todos los campos  |
| GET | /educaleveling/test/:Id | muestra solo un campo id  |
| PUT | /educaleveling/test/:Id | actualiza el campo id|
| DELETE | /educaleveling/test/:Id | Elimina un campo id |

### Team:
Guaci, Marcos and Vero.

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



## Endpoints
### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | admin | User Signup              | `first_name`, `last_name`, `email`, `password`, `DNI`  | { token: `token` }
POST   | /auth/login      | -     | admin | User Login               | `email`, `password`                             | { token: `token` }


### Profesor Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /profesor          | YES   | admin | Get All profesors       |  `query params`                                 | [{profesor}]
GET    | /profesor/:profesorId    | YES   | admin | Get One profesor       |                                 | {profesor}
GET    | /profesor/profile    | YES   | profesor | Get Own Profile          |                                                 |  {profesor}
GET    | /profesor/asignatura   | YES   | profesor  | Get Own asignaturas        |                               | [{asignatura}]
GET    | /profesor/curso   | YES   | profesor  | Get Own cursos        |                               | [{curso}]
POST   | /profesor     | YES   | admin |  Create one profesor     | `first_name`, `last_name`, `email`, `password`, `DNI` ,`role` | {profesor}
PUT    | /profesor/profile   | YES   | profesor |  Update own profesor     | `first_name`, `last_name`, `email`, `password`, `DNI`  | {message: 'profesor updated'}
PUT    | /profesor/:profesorId   | YES   | admin |  Update profesor  | `first_name`, `last_name`, `email`, `password`, `DNI`  | {message: 'profesor updated'}
DELETE | /profesor/:profesorId    | YES   | admin | Delete own profile       |                                                    | { message: 'Profile deleted' }

### Alumno Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /alumno          | YES   | admin | Get All alumnos       |  `query params`                                 | [{alumno}]
GET    | /alumno/:alumnoId    | YES   | profesor | Get One alumno       |                                 | {alumno}
GET    | /alumno/profile    | YES   | alumno | Get Own Profile          |                                                 |  {alumno}
GET    | /alumno/tests   | YES   | alumno   | Get own tests        |                                                 |  [{test}]
GET    | /alumno/asignatura    | YES   | profesor  | Get Own asignaturas        |                               | [{asignatura}]
GET    | /alumno/curso    | YES   | profesor  | Get Own cursos        |                               | [{asignatura}]
GET    | /alumno/test | YES   | alumno   | Get available tests  |                                                |  {test}
POST   | /alumno     | YES   | admin |  Create one alumno     | `first_name`, `last_name`, `email`, `password`, `DNI` ,`role` | {alumno}
PUT    | /alumno/profile   | YES   | alumno |  Update own alumno     | `first_name`, `last_name`, `email`, `password`, `DNI`  | {message: 'alumno updated'}
DELETE | /alumno/:alumnoId    | YES   | admin | Delete own profile       |                                                    | { message: 'Profile deleted' }

### Asignaturas Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /asignatura                | YES   | admin     | Get All asignaturas       |  `query params`                                 | [{asignatura}]
GET    | /asignatura/:asignaturaId  | YES   | admin     | Get One asignatura        |                               | {asignatura}
POST   | /asignatura                | YES   | admin     |  Create one asignatura    | `membership_num`,`first_name`, `last_name`, `email`, `password`, `phone`, `specializaition`, `profile_picture`  | {asignatura}
PUT    | /asignatura/:asignaturaId  | YES   | admin     |  Update one asignatura    | `membership_num`, `first_name`, `last_name`, `email`, `password`, `phone`, `specializaition`, `profile_picture`  | {message: 'asignatura updated'}
DELETE | /asignatura/:asignaturaId  | YES   | admin     | Delete one asignatura     |                                                   | {message: 'asignatura deleted'}


### Cursos Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /curso                | YES   | admin     | Get All cursos       |  `query params`                                 | [{curso}]
GET    | /curso/:cursoId       | YES   | admin     | Get One curso        |                               | {curso}
POST   | /curso                | YES   | admin     |  Create one curso    | `membership_num`,`first_name`, `last_name`, `email`, `password`, `phone`, `specializaition`, `profile_picture`  | {curso}
PUT    | /curso/:cursoId       | YES   | admin     |  Update one curso    | `membership_num`, `first_name`, `last_name`, `email`, `password`, `phone`, `specializaition`, `profile_picture`  | {message: 'curso updated'}
DELETE | /curso/:cursoId       | YES   | admin     | Delete one curso     |                                                   | {message: 'curso deleted'}


### ActividadesYExamenes Endpoints 

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /test            | YES   | admin| Get All tests        |  `query params`                                 | [{test}]
GET    | /test/:testId    | YES   | admin | Get One test        |                                   | {test}
GET    | /test/available  | YES   | alumno   | Get available tests  |                                                |  [{test}]
POST   | /test            | YES   | profesor | Create one test      | `test_date`, `test_time`, `description`, `duration`, `status` | {test}
PUT    | /test/available  | YES   | alumno   | Update own test      |   `status`   | {message: 'test updated'}
PUT    | /test/:testId    | YES   | profesor | Update one test      | `test_date`, `test_time`, `description`, `duration`, `status`| {message: 'test updated'}
DELETE | /test/:testId    | YES   | profesor | Delete one test      |                                            | {message: 'test deleted'}


### Equipamiento Endpoints

METHOD | ENDPOINT                       | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------              |-------|------|--------------------------|-------------------------------------------------|--------------------
GET    | /equipamiento                  | YES   | alumno | Get All equipamiento       |  `query params`                                 | [{equipamiento}]
GET    | /equipamiento/:equipamientoId  | YES   | profesor | Get One equipamiento       |                               | [{equipamiento}]
POST   | /equipamiento                  | YES   | admin |  Create one equipamiento        | `name`,`description`, `price` | {equipamiento}
PUT    | /equipamiento/:equipamientoId  | YES   | profesor |  Update one equipamiento        | `name`,`description`, `price` | {message: 'equipamiento updated'}
DELETE | /equipamiento/:equipamientoId  | YES   | admin | Delete one equipamiento         |                                                   | {message: 'equipamiento deleted'}

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.
### Authors
* [Black Developa](https://github.com/blackdevelopa)
* ![alt text](https://avatars0.githubusercontent.com/u/29962968?s=400&u=7753a408ed02e51f88a13a5d11014484bc4d80ee&v=4)
### License
This project is available for use under the MIT License.
