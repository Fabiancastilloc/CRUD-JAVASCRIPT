const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contratoController');

// Obtener todos los contratos
router.get('/listar', contratoController.getAllContratos);

// Obtener un contrato por su ID
router.get('/contrato/:id', contratoController.getContratoByID);

// Mostrar formulario de registro de contratos
router.get('/agregar', contratoController.showAgregarForm);

// Registrar un nuevo contrato
router.post('/agregar-contrato', contratoController.agregarContrato);

// Mostrar formulario de edición de contratos
router.get('/editar/:id', contratoController.showEditarForm);

// Editar un contrato
router.post('/editar-contrato/:id', contratoController.editarContrato);

// Eliminar un contrato
router.get('/eliminar/:id', contratoController.eliminarContrato);

module.exports = router;
