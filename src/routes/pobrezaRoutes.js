const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');


router.get('/pobreza-taza-de-pobreza-cordoba.json', setRequestInfo('Tasa de pobreza (Córdoba)',  'Tasa de Pobreza - Córdoba'), obtenerDatos);
router.get('/pobreza-taza-de-pobreza-nacion.json', setRequestInfo('Tasa de pobreza (Nación)', 'Tasa de Pobreza - Nación'), obtenerDatos);

module.exports = router;