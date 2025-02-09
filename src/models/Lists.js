const pool = require('../config/database');

const List = {
    createList: async (name) => {
        const query = 'INSERT INTO lists (name) VALUES ($1) RETURNING *';
        const result = await pool.query(query, [name]);
        return result.rows[0];
    },

    getLists: async () => {
        const result = await pool.query('SELECT * FROM lists');
        return result.rows;
    }
};

module.exports = List;
