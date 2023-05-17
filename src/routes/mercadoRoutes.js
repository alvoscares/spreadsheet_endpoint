const { Router } = require('express');
const router = Router();
const mercadoController = require('../controllers/mercadoController');


router.get('/tasa/:mercadoPath', mercadoController.getMercadoTasa);
router.get('/eph/:mercadoPath', mercadoController.getMercadoEph);

// router.get('/empleo-registrado', setRequestInfo('Empleo registradoo (Nación)',   'Empleo Registrado (SIPA)'), obtenerDatos);

// router.get('/mercado-laboral-desocupacion-cordoba.json', setRequestInfo('Tasa de desocupación (Córdoba)',  'Tasa de desocupación (Córdoba)'), obtenerDatos);
// router.get('/mercado-laboral-desocupacion-nacion.json', setRequestInfo('Tasa de desocupación (Nación)',  'Tasa de desocupación (Nación)'), obtenerDatos);
// router.get('/mercado-laboral-empleo-registrado-nacion.json', setRequestInfo('Empleo registrado (Nación)',   'Empleo Registrado (SIPA)'), obtenerDatos);
// router.get('/mercado-laboral-presion-cordoba.json', setRequestInfo('Presión sobre el mercado laboral (Córdoba)',  'Presión sobre el mercado laboral - Córdoba' ), obtenerDatos);
// router.get('/mercado-laboral-tasa-ocupados-cordoba.json', setRequestInfo('Tasa de ocupados demandantes (Córdoba)', 'Tasa de ocupados demandantes - Córdoba'), obtenerDatos);

module.exports = router;