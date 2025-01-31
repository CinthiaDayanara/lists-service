const List = require("../models/List");

exports.createList = async (req, res) => {
  try {
    const { board_id, name, position } = req.body;
    const newList = await List.create({ board_id, name, position });
    res.status(201).json({ message: "Lista creada", list: newList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
