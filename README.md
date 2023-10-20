# Proyecto-EducaLeveling

### Introduction
Project Support is an open source platform that enable users share causes they're passionate about and actively involved with with the hopes of connecting with other users equally interested in working with them on the given cause.
### Project Support Features
* Users can signup and login to their accounts
* Public (non-authenticated) users can access all causes on the platform
* Authenticated users can access all causes as well as create a new cause, edit their created cause and also delete what they've created.
### Installation Guide
* Clone this repository [here](https://github.com/blackdevelopa/ProjectSupport.git).
* The develop branch is the most stable branch at any given time, ensure you're working from it.
* Run npm install to install all dependencies
* You can either work with the default mLab database or use your locally installed MongoDB. Do configure to your choice in the application entry file.
* Create an .env file in your project root folder and add your variables. See .env.sample for assistance.
### Usage
* Run npm start:dev to start the application.
* Connect to the API using Postman on port 7066.
### serpica
#### usuarios
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/usuarios | To create a new |
| GET | /serpica/usuarios | muestra todos los campos|
| GET | /serpica/usuarios/:Id | muestra solo un campo id  |
| PATCH | /serpica/usuarios/:Id | actualiza el campo id|
| DELETE | /serpica/usuarios/:Id | Elimina un campo id |


#### direccion
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/direccion | To create a new |
| GET | /serpica/direccion | muestra todos los campos|
| GET | /serpica/direccion/:Id | muestra solo un campo id  |
| PATCH | /serpica/direccion/:Id | actualiza el campo id|
| DELETE | /serpica/direccion/:Id | Elimina un campo id |


#### telefono
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/telefono | To create a new |
| GET | /serpica/telefono  | muestra todos los campos|
| GET | /serpica/telefono /:Id | muestra solo un campo id  |
| PATCH | /serpica/telefono /:Id | actualiza el campo id|
| DELETE | /serpica/telefono /:Id | Elimina un campo id |


#### email
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/email | To create a new |
| GET | /serpica/email  | muestra todos los campos|
| GET | /serpica/email /:Id | muestra solo un campo id  |
| PATCH | /serpica/email /:Id | actualiza el campo id|
| DELETE | /serpica/email /:Id | Elimina un campo id |


#### motor corredera
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/corredera | To create a new  |
| GET | /serpica/corredera | muestra todos los campos |
| GET | /serpica/corredera/:Id | muestra solo un campo id |
| PATCH | /serpica/corredera/:Id | actualiza el campo id|
| DELETE | /serpica/corredera/:Id | Elimina un campo id  |


#### motor seccional 
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/seccional | To create a new  |
| GET | /serpica/seccional | muestra todos los campos  |
| GET | /serpica/seccional/:Id | muestra solo un campo id  |
| PATCH | /serpica/seccional/:Id | actualiza el campo id|
| DELETE | /serpica/seccional/:Id | Elimina un campo id |


#### motor batiente
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/batiente | To create a new |
| GET | /serpica/batiente | muestra todos los campos|
| GET | /serpica/batiente/:Id | muestra solo un campo id  |
| PATCH | /serpica/batiente/:Id | actualiza el campo id|
| DELETE | /serpica/batiente/:Id | Elimina un campo id |


#### accesorios mandos
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/mandos | To create a new |
| GET | /serpica/mandos | muestra todos los campos|
| GET | /serpica/mandos/:Id | muestra solo un campo id  |
| PATCH | /serpica/mandos/:Id | actualiza el campo id|
| DELETE | /serpica/mandos/:Id | Elimina un campo id |


#### accesorios cremallera
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/cremallera | To create a new |
| GET | /serpica/cremallera | muestra todos los campos|
| GET | /serpica/cremallera/:Id | muestra solo un campo id  |
| PATCH | /serpica/cremallera/:Id | actualiza el campo id|
| DELETE | /serpica/cremallera/:Id | Elimina un campo id |


#### accesorios sensores
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/sensores | To create a new |
| GET | /serpica/sensores | muestra todos los campos|
| GET | /serpica/sensores/:Id | muestra solo un campo id  |
| PATCH | /serpica/sensores/:Id | actualiza el campo id|
| DELETE | /serpica/sensores/:Id | Elimina un campo id |


#### manuales tecnicos
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /serpica/manuales | To create a new |
| GET | /serpica/manuales | muestra todos los campos|
| GET | /serpica/manuales/:Id | muestra solo un campo id  |
| PATCH | /serpica/manuales/:Id | actualiza el campo id|
| DELETE | /serpica/manuales/:Id | Elimina un campo id |

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
