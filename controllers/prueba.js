const fs = require('fs');

// Leer el archivo pacientes.json
fs.readFile('pacientes.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Convertir el contenido del archivo a un objeto JSON
  const pacientes = JSON.parse(data);

  // Agregar un nuevo paciente al objeto JSON
  pacientes.push({
    nombre: 'Juan',
    edad: 35,
    sexo: 'M',
    historia_clinica: []
  });

  // Escribir el objeto JSON modificado de vuelta al archivo pacientes.json
  fs.writeFile('pacientes.json', JSON.stringify(pacientes), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Paciente agregado exitosamente');
  });
});