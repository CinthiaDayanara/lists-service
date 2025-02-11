const express = require('express');
const { createList, getLists } = require('../controllers/listsController'); // ✅ Verifica que este archivo existe y exporta estas funciones

const router = express.Router();

// Ruta para obtener todas las listas
router.get('/lists', getLists);

// Ruta para crear una lista
router.post('/lists', createList);

module.exports = router;
