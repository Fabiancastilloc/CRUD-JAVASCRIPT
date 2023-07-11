const contratoModel = require('../models/contratoModel');

// Obtener todos los contratos
const getAllContratos = async (req, res) => {
  try {
    const contratos = await contratoModel.getAllContratos();
    res.render('contrato/listar', { contratos });
  } catch (error) {
    res.status(500).send('Error al obtener los contratos');
  }
};

// Obtener un contrato por su ID
const getContratoByID = async (req, res) => {
  const id = req.params.id;
  try {
    const contrato = await contratoModel.getContratoByID(id);
    if (contrato) {
      res.render('contrato/editar', { contrato });
    } else {
      res.status(404).send('Contrato no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al obtener el contrato');
  }
};

// Mostrar formulario de registro de contratos
const showAgregarForm = (req, res) => {
  res.render('contrato/agregar');
};

// Registrar un nuevo contrato
const agregarContrato = async (req, res) => {
  const contrato = req.body;
  try {
    const id = await contratoModel.addContrato(contrato);
    res.redirect('/contratos/listar');
  } catch (error) {
    res.status(500).send('Error al agregar el contrato');
  }
};

// Mostrar formulario de edición de contratos
const showEditarForm = async (req, res) => {
  const id = req.params.id;
  try {
    const contrato = await contratoModel.getContratoByID(id);
    if (contrato) {
      res.render('contrato/editar', { contrato });
    } else {
      res.status(404).send('Contrato no encontrado');
    }
  } catch (error) {
    res.status(500).send('Error al obtener el contrato');
  }
};

// Editar un contrato
const editarContrato = async (req, res) => {
  const id = req.params.id;
  const contrato = req.body;
  try {
    await contratoModel.editContrato(id, contrato);
    res.redirect('/contratos/listar');
  } catch (error) {
    res.status(500).send('Error al editar el contrato');
  }
};

// Eliminar un contrato
const eliminarContrato = async (req, res) => {
  const id = req.params.id;
  try {
    await contratoModel.deleteContrato(id);
    res.redirect('/contratos/listar');
  } catch (error) {
    res.status(500).send('Error al eliminar el contrato');
  }
};

module.exports = {
  getAllContratos,
  getContratoByID,
  showAgregarForm,
  agregarContrato,
  showEditarForm,
  editarContrato,
  eliminarContrato
};
