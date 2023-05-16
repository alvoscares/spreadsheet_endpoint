const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');


router.get('/previsional-haber-medio.json', setRequestInfo('Haber medio (Córdoba)',  'Haber medio - Córdoba'), obtenerDatos);

module.exports = router;