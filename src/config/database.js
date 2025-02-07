const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: 'database-1.cixz4yf0sjtl.us-east-1.rds.amazonaws.com',  // Dominio de tu base de datos RDS
  dialect: 'postgres',
  username: 'postgres',
  password: 'DAYAc1234',
  database: 'listas',
  port: 5432, // O el puerto correcto de tu base de datos
  logging: false, // Puedes activarlo para depuración
});

module.exports = sequelize;
