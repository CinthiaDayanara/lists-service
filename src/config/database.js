const { Client } = require('pg');

// Configuración de conexión a PostgreSQL
const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432, // Por defecto el puerto de PostgreSQL es 5432
});

const connectDB = async () => {
  try {
    // Establecer la conexión con la base de datos
    await client.connect();
    console.log('Conectado a PostgreSQL');
  } catch (error) {
    console.error('Error al conectar a la base de datos', error);
    process.exit(1); // Terminar el proceso si no se puede conectar
  }
};

module.exports = connectDB;
