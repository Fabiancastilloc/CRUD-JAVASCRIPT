const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Obtener todos los usuarios
router.get('/listar', usuarioController.getAllUsuarios);

// Obtener un usuario por su cc
router.get('/usuario/:cc', usuarioController.getUsuarioByCC);

// Ruta para mostrar el formulario de registro de usuarios
router.get('/registrar', usuarioController.showRegistrarForm);

// Ruta para procesar el formulario de registro de usuarios
router.post('/registrar-user', usuarioController.registrarUsuario);

// Ruta para mostrar el formulario de edición de usuarios
router.get('/editar/:cc', usuarioController.showEditarForm);

// Ruta para procesar el formulario de edición de usuarios
router.post('/editar-user/:cc', usuarioController.editarUsuario);

// Ruta para eliminar un usuario
router.get('/eliminar/:cc', usuarioController.eliminarUsuario);

// Ruta para mostrar el formulario de inicio de sesión
router.get('/login', usuarioController.showLoginForm);

// Ruta para procesar el inicio de sesión
router.post('/login', usuarioController.login);

// Ruta para cerrar sesión
router.get('/logout', usuarioController.logout);

module.exports = router;
