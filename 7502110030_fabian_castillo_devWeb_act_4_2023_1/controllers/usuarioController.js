const usuarioModel = require('../models/usuarioModel');

// Obtener todos los usuarios
const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioModel.getAllUsuarios();
    res.render('usuario/listar', { usuarios });
  } catch (error) {
    res.status(500).send('Error al obtener los usuarios');
  }
};

// Obtener un usuario por su cc
const getUsuarioByCC = async (req, res) => {
  const cc = req.params.cc;
  try {
    const usuario = await usuarioModel.getUsuarioByCC(cc);
    if (usuario) {
      res.render('usuario/editar', { usuario });
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al obtener el usuario');
  }
};

// Mostrar formulario de registro de usuarios
const showRegistrarForm = (req, res) => {
  res.render('usuario/registrar');
};

// Registrar un nuevo usuario
const registrarUsuario = async (req, res) => {
  const usuario = req.body;
  try {
    const id = await usuarioModel.addUsuario(usuario);
    res.redirect('/usuarios/listar');
  } catch (error) {
    res.status(500).send('Error al agregar el usuario');
  }
};

// Mostrar formulario de edición de usuarios
const showEditarForm = async (req, res) => {
  const cc = req.params.cc;
  try {
    const usuario = await usuarioModel.getUsuarioByCC(cc);
    if (usuario) {
      res.render('usuario/editar', { usuario });
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al obtener el usuario');
  }
};

// Editar un usuario
const editarUsuario = async (req, res) => {
  const cc = req.params.cc;
  const usuario = req.body;
  try {
    await usuarioModel.editUsuario(cc, usuario);
    res.redirect('/usuarios/listar');
  } catch (error) {
    res.status(500).send('Error al editar el usuario');
  }
};

// Eliminar un usuario
const eliminarUsuario = async (req, res) => {
  const cc = req.params.cc;
  try {
    await usuarioModel.deleteUsuario(cc);
    res.redirect('/usuarios/listar');
  } catch (error) {
    res.status(500).send('Error al eliminar el usuario');
  }
};

// Mostrar formulario de inicio de sesión
const showLoginForm = (req, res) => {
  res.render('usuario/login');
};

// Procesar inicio de sesión
const login = async (req, res) => {
  const { cc, pass } = req.body;
  try {
    const usuario = await usuarioModel.getUsuarioByCC(cc);
    if (usuario && usuario.pass === pass) {
      req.session.usuario = usuario; // Guardar el usuario en la sesión
      res.redirect('/');
    } else {
      res.status(401).send('Credenciales inválidas');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al iniciar sesión')
    ;
  }
};
// Cerrar sesión
const logout = (req, res) => {
  req.session.usuario = null; // Eliminar el usuario de la sesión
  res.redirect('/');
};

module.exports = {
  getAllUsuarios,
  getUsuarioByCC,
  showRegistrarForm,
  registrarUsuario,
  showEditarForm,
  editarUsuario,
  eliminarUsuario,
  showLoginForm,
  login,
  logout
};
