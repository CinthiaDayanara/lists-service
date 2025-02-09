const pool = require('../config/database');  // Importamos pool

const List = {
    createList: async (name, descripcion = null) => {  // Cambiamos "name" a "nombre"
        try {
            console.log('🔍 pool:', pool);  // Para depurar si pool está importado correctamente
            const query = 'INSERT INTO listas (nombre, descripcion) VALUES ($1, $2) RETURNING *';
            const result = await pool.query(query, [name, descripcion]);
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

module.exports = List;
