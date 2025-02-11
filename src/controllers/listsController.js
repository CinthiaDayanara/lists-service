const List = require('../models/Lists'); // ✅ Verifica que este archivo existe y exporta métodos

const createList = async (req, res) => {
    console.log('🔍 Body recibido:', req.body);

    const { nombre, descripcion } = req.body;
    if (!nombre) {
        return res.status(400).json({ message: "❌ El nombre de la lista es obligatorio" });
    }

    try {
        const newList = await List.createList(nombre, descripcion);
        res.status(201).json({ message: '✅ Lista creada con éxito', list: newList });
    } catch (error) {
        res.status(500).json({ message: `❌ Error al crear la lista: ${error.message}` });
    }
};

const getLists = async (req, res) => {
    try {
        const lists = await List.getLists();
        res.status(200).json(lists);
    } catch (error) {
        res.status(500).json({ message: `❌ Error al obtener las listas: ${error.message}` });
    }
};

module.exports = { createList, getLists }; // ✅ Asegúrate de que esto esté al final
