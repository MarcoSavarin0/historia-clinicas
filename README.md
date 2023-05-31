# Historias Clínicas - Documentación del Proyecto 🏥

Este proyecto de historias clínicas fue desarrollado utilizando las siguientes tecnologías:

🔧 **Node.js**: Plataforma de tiempo de ejecución de JavaScript que permite ejecutar código JavaScript en el servidor.

🌐 **Express**: Framework web rápido y minimalista para Node.js que facilita la creación de aplicaciones web y APIs.

🎨 **Bootstrap**: Framework de front-end que proporciona componentes y estilos predefinidos para crear interfaces web atractivas y receptivas.

🖼️ **EJS**: Motor de plantillas de JavaScript que permite generar vistas HTML dinámicas utilizando sintaxis de JavaScript.

💾 **MySQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar la información de los pacientes y las visitas médicas.

## Requisitos previos 📋

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 10 o superior)
- **NPM** (Node Package Manager)
- **XAMPP**: Paquete de software que incluye Apache, MySQL y PHP para crear un entorno de desarrollo local.

## Configuración inicial ⚙️

1. Clona o descarga el proyecto desde el repositorio.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

npm install


4. Inicia el servidor de MySQL utilizando XAMPP y asegúrate de que esté en ejecución.

5. Crea una base de datos en MySQL y configura la conexión en el archivo `config.js` del proyecto.

## Ejecución del proyecto ▶️
npm start

Una vez que hayas realizado la configuración inicial, puedes ejecutar el proyecto utilizando el siguiente comando:


Esto iniciará el servidor y podrás acceder a la aplicación abriendo un navegador web y visitando la siguiente URL: `http://localhost:3000`.

## Uso de la aplicación 📝

### Agregar un nuevo paciente ➕

1. En la página de inicio, haz clic en el enlace "Agregar Nuevo Paciente".
2. Completa el formulario con los datos personales del paciente, incluyendo fecha de nacimiento, obra social, etc.
3. Haz clic en el botón "Guardar" para agregar el nuevo paciente.

### Agregar una visita médica 📅

1. En la página de inicio, verás la lista de pacientes existentes.
2. Haz clic en el nombre de un paciente para ver su perfil.
3. En el perfil del paciente, haz clic en el enlace "Agregar Visita Médica".
4. Completa el formulario con los detalles de la visita médica, como el nombre del médico, la fecha y las notas adicionales.
5. Haz clic en el botón "Guardar" para agregar la visita médica al paciente.

¡Listo! Ahora puedes utilizar esta aplicación de historias clínicas para administrar y registrar la información de tus pacientes y sus visitas médicas de manera sencilla.

### Búsqueda de pacientes 🔍
1. En la página de inicio, en la barra de búsqueda, ingresa el nombre o parte del nombre del paciente que deseas buscar.
2. Los resultados de la búsqueda se mostrarán automáticamente a medida que vayas escribiendo.
3. Haz clic en el paciente deseado para ver su perfil
