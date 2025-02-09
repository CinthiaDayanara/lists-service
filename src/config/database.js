const { Pool } = require('pg');  // Importamos Pool desde pg
require('dotenv').config();  // Cargar variables de entorno

// Crear la conexión con PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    max: 20,  // Número máximo de conexiones
    idleTimeoutMillis: 30000,  // Tiempo máximo de inactividad
    connectionTimeoutMillis: 2000  // Tiempo máximo de espera para conexión
});

// Verificar conexión a la base de datos
pool.connect()
    .then(() => console.log('✅ Conexión a PostgreSQL exitosa'))
    .catch(err => console.error('❌ Error al conectar a PostgreSQL:', err));

module.exports = pool;  // Exportamos pool para ser utilizado en otros archivos
