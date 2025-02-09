const List = require('../models/Lists');

const createList = async (req, res) => {
    console.log('🔍 Body recibido:', req.body);  // Agregar este log para ver qué llega

    const { nombre, descripcion } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: "El nombre de la lista es obligatorio" });
    }

    try {
        const newList = await List.createList(nombre, descripcion);
        res.status(201).json({ message: '✅ Lista creada con éxito', list: newList });
    } catch (error) {
        res.status(500).json({ message: `❌ Error al crear la lista: ${error.message}` });
    }
};

module.exports = { createList };
