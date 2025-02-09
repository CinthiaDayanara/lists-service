const pool = require('../config/database'); // ✅ Verifica que este archivo existe

const List = {
    createList: async (nombre, descripcion = null) => {
        try {
            const query = 'INSERT INTO listas (nombre, descripcion) VALUES ($1, $2) RETURNING *';
            const result = await pool.query(query, [nombre, descripcion]);
            return result.rows[0];
        } catch (error) {
            console.error('❌ Error en createList:', error);
            throw new Error(error.message);
        }
    },

    getLists: async () => {
        try {
            const result = await pool.query('SELECT * FROM listas');
            return result.rows;
        } catch (error) {
            console.error('❌ Error en getLists:', error);
            throw new Error(error.message);
        }
    }
};

module.exports = List; // ✅ Asegúrate de que esto esté presente
