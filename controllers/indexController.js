const { log } = require('console');
const fs = require('fs');
const path = require('path');
function calcularEdad(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const mes = hoy.getMonth() - nacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  return edad;
}


module.exports={
    index: function(req,res){
        const ruta = ['pacientes.json']
        let pacientes = JSON.parse(fs.readFileSync(ruta.join('/'), 'utf8'))
        res.render('index', {pacientes:pacientes})
    },
    detalle: function(req,res){
        const id = req.params.id;
        const ruta = ['pacientes.json']
        let pacientes = JSON.parse(fs.readFileSync(ruta.join('/'), 'utf8'))
        let pacienteId = pacientes.find(paciente => paciente.id == id)
        res.render('pacienteDetalle',{paciente:pacienteId, calcularEdad})
    },
    formCreacion: function(req,res){
        res.render('createPaciente')
    },
    crearPaciente: function(req,res){
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const edad = req.body.edad;
        const dni = req.body.dni;
        const domicilio = req.body.domicilio;
        const obra_social = req.body.obraSocial;
        const fecha_nacimiento = req.body.fechaNacimiento;
        const nObraSocial = req.body.nObraSocial;
        const telefono = req.body.telefono
        const ruta = ['pacientes.json']
        // Leer el archivo JSON de pacientes
        const pacientes = JSON.parse(fs.readFileSync(ruta.join('/'), 'utf8'));
        console.log(pacientes);

      
      
        const nuevoPaciente = {
          id: pacientes.length + 1,
          nombre: nombre,
          apellido: apellido,
          edad: edad,
          dni: dni,
          telefono: telefono,
          domicilio: domicilio,
          obra_social: obra_social,
          nObraSocial: nObraSocial,
          fecha_nacimiento: fecha_nacimiento,
          visitas: []
        };
      
       
        pacientes.push(nuevoPaciente);
      
       
        fs.writeFileSync('pacientes.json', JSON.stringify(pacientes, null, 2));
      
        
        res.redirect("/");
    },
    historiaClinica: function(req,res){
        const id = req.params.id;
        const ruta = ['pacientes.json']
        let pacientes = JSON.parse(fs.readFileSync(ruta.join('/'), 'utf8'))
        let pacienteId = pacientes.find(paciente => paciente.id == id)
        res.render('agregarHistoria', {paciente: pacienteId})
    },
    agregarHistoriaClinica: function(req, res) {
        const idPaciente = req.params.id;
        const fecha = req.body.fecha;
        const diagnostico = req.body.diagnostico;
        const tratamiento = req.body.tratamiento;
      
       
        const pacientes = JSON.parse(fs.readFileSync('pacientes.json'));
      
        
        const pacienteEncontrado = pacientes.find(p => p.id == idPaciente);
      
        if (!pacienteEncontrado) {
          res.status(404).send('Paciente no encontrado');
          return;
        }
      
        
        const nuevaVisita = {
          fecha: fecha,
          diagnostico: diagnostico,
          tratamiento: tratamiento
        };
      
       
        pacienteEncontrado.visitas.push(nuevaVisita);
      
       
        fs.writeFileSync('pacientes.json', JSON.stringify(pacientes, null, 2));
      
       
        res.redirect("/detalle/" + idPaciente);
      },
      buscarPaciente: function(req,res){
        const dni = req.query.dni;
        const ruta = ['pacientes.json']
        const pacientes = JSON.parse(fs.readFileSync(ruta.join('/'), 'utf8'));
      
        const resultado = pacientes.find(paciente => paciente.dni === dni);
      
        res.render('searchPaciente', { paciente: resultado, calcularEdad });
      }
      
    
}