const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

// Configuración de variables de entorno
dotenv.config();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(cookieSession({
  name: 'session',
  keys: ['usuario']
}))

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const usuarioRoutes = require('./routes/usuarioRoutes');
const contratoRoutes = require('./routes/contratoRoutes');

app.use('/usuarios', usuarioRoutes);
app.use('/contratos', contratoRoutes);


// Página de inicio
app.get('/', (req, res) => {
  res.render('index', { usuario: req.session.usuario });
});


// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).send('Error 404: Página no encontrada');
});

// Inicio del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

