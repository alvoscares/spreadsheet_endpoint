const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');

router.get('/salarios-indice-total.json', setRequestInfo('Salarios (Índice de Salarios)',  'Índice Total de Salarios'), obtenerDatos);

module.exports = router;