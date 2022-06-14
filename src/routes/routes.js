const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');
   


router.get('/actividad-economica-emae.json', setRequestInfo('EMAE desestacionalizado (variación mensual)'), obtenerDatos);
router.get('/actividad-economica-pbi.json', setRequestInfo('PBI a precios constantes (variación interanual)'), obtenerDatos);
router.get('/cuentas-publicas-gasto-nacion.json', setRequestInfo('Gasto (variación interanual)', 'Nación'), obtenerDatos);
router.get('/dolar-blue.json', setRequestInfo('Blue', 'Nación', 20200101), obtenerDatos);
router.get('/dolar-CCL.json', setRequestInfo('CCL', 'Nación', 20200101), obtenerDatos);
router.get('/dolar-oficial.json', setRequestInfo('Minorista', 'Nación', 20200101), obtenerDatos);
router.get('/dolar-solidario.json', setRequestInfo('Solidario', 'Nación', 20200101), obtenerDatos);
router.get('/mercado-laboral-desocupacion-cordoba.json', setRequestInfo('Tasa de desocupación', 'Córdoba'), obtenerDatos);
router.get('/mercado-laboral-desocupacion-nacion.json', setRequestInfo('Tasa de desocupación', 'Nación'), obtenerDatos);
router.get('/mercado-laboral-empleo-registrado-nacion.json', setRequestInfo('Empleo Registrado (SIPA)', 'Nación'), obtenerDatos);
router.get('/mercado-laboral-presion-cordoba.json', setRequestInfo('Presión sobre el mercado laboral', 'Córdoba'), obtenerDatos);
router.get('/mercado-laboral-tasa-ocupados-cordoba.json', setRequestInfo('Tasa de ocupados demandantes', 'Córdoba'), obtenerDatos);
router.get('/pobreza-taza-de-pobreza-cordoba.json', setRequestInfo('Tasa de pobreza (personas)', 'Córdoba'), obtenerDatos);
router.get('/pobreza-taza-de-pobreza-nacion.json', setRequestInfo('Tasa de pobreza (personas)', 'Nación'), obtenerDatos);
router.get('/precios-ipc-cordoba.json', setRequestInfo('IPC (variación mensual)', 'Córdoba'), obtenerDatos);
router.get('/precios-ipc-nacion.json', setRequestInfo('IPC (variación mensual)', 'Nación'), obtenerDatos);
router.get('/previsional-haber-medio.json', setRequestInfo('Haber medio'), obtenerDatos);
router.get('/salarios-indice-total.json', setRequestInfo('Índice Total de Salarios (variación interanual)'), obtenerDatos);




module.exports = router;