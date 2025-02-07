const List = require('../models/Lists');

// Controlador para crear una lista
const createList = async (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ message: "El nombre de la lista es obligatorio" });
  }

  try {
    const newList = await List.createList(name);
    res.status(201).json({ message: 'Lista creada con éxito', list: newList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener todas las listas
const getLists = async (req, res) => {
  try {
    const lists = await List.getLists();
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createList, getLists };
