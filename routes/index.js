var express = require('express');
var router = express.Router();
var siteController = require('../controllers/siteController')

// Endpoints vistas
router.get('/', siteController.index);
router.get('/registro', siteController.registro);
router.get('/finregistro', siteController.finInscripcion);

// Endpoints funcionales
router.post('/inscriptos/new', siteController.addInscripto )

module.exports = router;
