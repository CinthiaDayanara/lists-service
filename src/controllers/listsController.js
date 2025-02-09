const List = require('../models/Lists');

const createList = async (req, res) => {
    console.log('🔍 Body recibido:', req.body);  // 🚨 Imprimir lo que llega

    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ message: "❌ No se recibió ningún body en la solicitud" });
    }

    const { nombre, descripcion } = req.body;

    if (!nombre) {
        console.log('❌ El campo "nombre" no está en req.body:', req.body);
        return res.status(400).json({ message: "❌ El campo 'nombre' es obligatorio en el body" });
    }

    try {
        const newList = await List.createList(nombre, descripcion);
        res.status(201).json({ message: '✅ Lista creada con éxito', list: newList });
    } catch (error) {
        res.status(500).json({ message: `❌ Error al crear la lista: ${error.message}` });
    }
};

module.exports = { createList };
