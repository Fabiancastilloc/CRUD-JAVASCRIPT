const connection = require('../config/database');

// Función para obtener todos los contratos
const getAllContratos = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM contratos';
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Función para obtener un contrato por su ID
const getContratoByID = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM contratos WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
};

// Función para agregar un nuevo contrato
const addContrato = (contrato) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO contratos SET ?';
    connection.query(query, contrato, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

// Función para editar un contrato
const editContrato = (id, contrato) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE contratos SET ? WHERE id = ?';
    connection.query(query, [contrato, id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

// Función para eliminar un contrato
const deleteContrato = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM contratos WHERE id = ?';
    connection.query(query, [id], (error, results) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  getAllContratos,
  getContratoByID,
  addContrato,
  editContrato,
  deleteContrato
};
