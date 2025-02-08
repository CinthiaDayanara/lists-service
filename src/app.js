const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const listRoutes = require('./routes/listsRoutes');

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar rutas de lista
app.use('/api', listRoutes);

// Puerto y servidor
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
