const express = require('express');
const { createList, getLists } = require('../controllers/listsController');
const router = express.Router();

// Ruta para crear una lista
router.post('/lists', createList);

// Ruta para obtener todas las listas
router.get('/lists', getLists);

module.exports = router;
