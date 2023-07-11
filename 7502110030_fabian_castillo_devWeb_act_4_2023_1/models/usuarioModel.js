const connection = require('../config/database');

// Función para obtener todos los usuarios
const getAllUsuarios = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM usuarios';
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Función para obtener un usuario por su cc
const getUsuarioByCC = (cc) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM usuarios WHERE cc = ?';
    connection.query(query, [cc], (error, results) => {
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

// Función para agregar un nuevo usuario
const addUsuario = (usuario) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO usuarios SET ?';
    connection.query(query, usuario, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results.insertId);
      }
    });
  });
};

// Función para editar un usuario
const editUsuario = (cc, usuario) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE usuarios SET ? WHERE cc = ?';
    connection.query(query, [usuario, cc], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

// Función para eliminar un usuario
const deleteUsuario = (cc) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM usuarios WHERE cc = ?';
    connection.query(query, [cc], (error, results) => {
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
  getAllUsuarios,
  getUsuarioByCC,
  addUsuario,
  editUsuario,
  deleteUsuario
};
