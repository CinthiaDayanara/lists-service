const pool = require('../config/database');

// Función para crear una lista en la base de datos
const createList = async (name) => {
  const query = 'INSERT INTO lists(name) VALUES($1) RETURNING *';
  const values = [name];

  try {
    const res = await pool.query(query, values);
    return res.rows[0];  // Devuelve la lista recién creada
  } catch (error) {
    throw new Error('Error al crear la lista: ' + error.message);
  }
};

// Función para obtener todas las listas
const getLists = async () => {
  const query = 'SELECT * FROM lists';
  try {
    const res = await pool.query(query);
    return res.rows;  // Devuelve todas las listas
  } catch (error) {
    throw new Error('Error al obtener listas: ' + error.message);
  }
};

module.exports = { createList, getLists };
