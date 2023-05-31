const { log } = require('console');
const fs = require('fs');
const path = require('path');
const db = require('../database/models/Index')
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
    index: async function(req,res){
      const paciente = await db.paciente.findAll({
        include:[{association: "observaciones"}]
      })
        res.render('index', {pacientes:paciente})
    },
    detalle: async function(req,res){
        const id = req.params.id;
        const paciente = await db.paciente.findByPk(id,{
          include:[{association: "observaciones"}]
        })
        res.render('pacienteDetalle',{paciente:paciente, calcularEdad})
    },
    formCreacion: function(req,res){
        res.render('createPaciente')
    },
    crearPaciente: async function(req,res){
       const pacienteNuevo = await db.paciente.create({
          ...req.body
       })
       res.redirect('/')
    },
    historiaClinica:async function(req,res){
        const id = req.params.id;
        const paciente = await db.paciente.findByPk(id)
        console.log(paciente);
        res.render('agregarHistoria', {paciente: paciente})
    },
    agregarHistoriaClinica: async function(req, res) {
      const idPaciente = req.params.id;
      let findPaciente = await db.paciente.findByPk(idPaciente);
      
      if (findPaciente) {
        let crearObservacion = await db.observacione.create({
          ID_paciente: findPaciente.idPacientes,
          fecha_visita: req.body.fecha_visita,
          descripcion: req.body.descripcion
        });
        
        res.redirect("/detalle/" + idPaciente);
      } else {
        
        res.status(404).send("Paciente no encontrado");
      }
    }
    ,



      buscarPaciente: function(req,res){
        const nombre = req.query.nombre;
        db.paciente.findAll({
          where:{
            nombre:{[db.Sequelize.Op.like] : "%"+nombre+"%"}
          }
        }).then(resultado =>{
          console.log(resultado);
          res.render('searchPaciente',{paciente:resultado})})
      },
      prueba: async function(req,res){
        const paciente = await db.paciente.findAll({
          include:[{association: "observaciones"}]
        })
          return res.json(paciente)
      }
      
    
}