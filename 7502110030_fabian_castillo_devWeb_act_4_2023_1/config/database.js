const mysql = require('mysql2');
require('dotenv').config();

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root2',
  password: '', 
  database: 'dbactividad'
});

// Establecer la conexión a la base de datos
connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos: ', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;
