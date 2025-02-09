const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const List = sequelize.define('List', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Método para crear una lista
List.createList = async (name) => {
    return await List.create({ name });
};

// Método para obtener todas las listas
List.getLists = async () => {
    return await List.findAll();
};

module.exports = List;
