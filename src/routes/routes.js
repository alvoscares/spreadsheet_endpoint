const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');
   


router.get('/actividad-economica-emae.json', setRequestInfo('EMAE desestacionalizado (variación mensual)', 'Nación',  "EMAE desestacionalizado"), obtenerDatos);
router.get('/actividad-economica-pbi.json', setRequestInfo('PBI a precios constantes (variación interanual)', 'Nación', "PBI a precios constantes"), obtenerDatos);
router.get('/cuentas-publicas-gasto-nacion.json', setRequestInfo('Gasto (variación interanual)', 'Nación', 'Gasto'), obtenerDatos);
router.get('/dolar-blue.json', setRequestInfo('Dólar blue', undefined, 'USD en pesos'), obtenerDatos);
router.get('/dolar-CCL.json', setRequestInfo('Dólar CCL', undefined,  'USD en pesos'), obtenerDatos);
router.get('/dolar-oficial.json', setRequestInfo('Dólar minorista', undefined, 'USD en pesos'), obtenerDatos);
router.get('/dolar-solidario.json', setRequestInfo('Dólar solidario', undefined, 'USD en pesos'), obtenerDatos);
router.get('/dolar-unificados.json', setRequestInfo("Dolar", undefined, 'USD en pesos', ["Solidario","Blue","CCL","Minorista"]), obtenerDatos);
router.get('/mercado-laboral-desocupacion-cordoba.json', setRequestInfo('Tasa de desocupación', 'Córdoba',  'Tasa de desocupación (Córdoba)'), obtenerDatos);
router.get('/mercado-laboral-desocupacion-nacion.json', setRequestInfo('Tasa de desocupación', 'Nación',  'Tasa de desocupación (Nación)'), obtenerDatos);
router.get('/mercado-laboral-empleo-registrado-nacion.json', setRequestInfo('Empleo Registrado (SIPA)', 'Nación',  'Empleo Registrado (SIPA)'), obtenerDatos);
router.get('/mercado-laboral-presion-cordoba.json', setRequestInfo('Presión sobre el mercado laboral', 'Córdoba',  'Presión sobre el mercado laboral - Córdoba' ), obtenerDatos);
router.get('/mercado-laboral-tasa-ocupados-cordoba.json', setRequestInfo('Tasa de ocupados demandantes', 'Córdoba', 'Tasa de ocupados demandantes - Córdoba'), obtenerDatos);
router.get('/pobreza-taza-de-pobreza-cordoba.json', setRequestInfo('Tasa de pobreza (personas)', 'Córdoba',  'Tasa de Pobreza - Córdoba'), obtenerDatos);
router.get('/pobreza-taza-de-pobreza-nacion.json', setRequestInfo('Tasa de pobreza (personas)', 'Nación', 'Tasa de Pobreza - Nación'), obtenerDatos);
router.get('/precios-ipc-cordoba.json', setRequestInfo('IPC (variación mensual)', 'Córdoba',  'IPC - Córdoba'), obtenerDatos);
router.get('/precios-ipc-nacion.json', setRequestInfo('IPC (variación mensual)', 'Nación',  'IPC - Nación'), obtenerDatos);
router.get('/previsional-haber-medio.json', setRequestInfo('Haber medio', 'Córdoba',  'Haber medio - Córdoba'), obtenerDatos);
router.get('/salarios-indice-total.json', setRequestInfo('Índice Total de Salarios (variación interanual)', 'Nación',  'Índice Total de Salarios'), obtenerDatos);




module.exports = router;