var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.index);

router.get('/create', controller.formCreacion)
router.post('/create', controller.crearPaciente)


router.get('/detalle/:id', controller.detalle)
router.get('/buscar', controller.buscarPaciente);
//hacer el post del detalle con sus rutas :id

router.get('/historiaClinica/:id', controller.historiaClinica)
router.post('/agregarHistoriaClinica/:id', controller.agregarHistoriaClinica)


router.get('/prueba', controller.prueba)
module.exports = router;
