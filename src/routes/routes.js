const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');

//Actividad
router.get('/actividad-economica-emae.json', setRequestInfo('Estimador Mensual de Actividad Económica (EMAE)',  "EMAE desestacionalizado"), obtenerDatos);
router.get('/actividad-economica-pbi.json', setRequestInfo('Producto Bruto Interno (PBI)', "PBI a precios constantes"), obtenerDatos);
//Cuentas
router.get('/cuentas-publicas-gasto-nacion.json', setRequestInfo('Gasto primario (Nación)', 'Gasto primario (Nación)'), obtenerDatos);
//Dolar
router.get('/dolar-blue.json', setRequestInfo('Dólar blue', 'USD en pesos'), obtenerDatos);
router.get('/dolar-CCL.json', setRequestInfo('Dólar CCL', 'USD en pesos'), obtenerDatos);
router.get('/dolar-oficial.json', setRequestInfo('Dólar oficial', 'USD en pesos'), obtenerDatos);
router.get('/dolar-MEP.json', setRequestInfo('Dólar MEP', 'USD en pesos'), obtenerDatos);
router.get('/dolar-solidario.json', setRequestInfo('Dólar solidario', 'USD en pesos'), obtenerDatos);
router.get('/dolar-unificados.json', setRequestInfo("Dólar",  'USD en pesos', ['Dólar blue', 'Dólar solidario', 'Dólar MEP', 'Dólar CCL', 'Dólar oficial']), obtenerDatos);
//Mercado
router.get('/mercado-laboral-desocupacion-cordoba.json', setRequestInfo('Tasa de desocupación (Córdoba)',  'Tasa de desocupación (Córdoba)'), obtenerDatos);
router.get('/mercado-laboral-desocupacion-nacion.json', setRequestInfo('Tasa de desocupación (Nación)',  'Tasa de desocupación (Nación)'), obtenerDatos);
router.get('/mercado-laboral-empleo-registrado-nacion.json', setRequestInfo('Empleo registrado (Nación)',   'Empleo Registrado (SIPA)'), obtenerDatos);
router.get('/mercado-laboral-presion-cordoba.json', setRequestInfo('Presión sobre el mercado laboral (Córdoba)',  'Presión sobre el mercado laboral - Córdoba' ), obtenerDatos);
router.get('/mercado-laboral-tasa-ocupados-cordoba.json', setRequestInfo('Tasa de ocupados demandantes (Córdoba)', 'Tasa de ocupados demandantes - Córdoba'), obtenerDatos);
//Pobreza
router.get('/pobreza-taza-de-pobreza-cordoba.json', setRequestInfo('Tasa de pobreza (Córdoba)',  'Tasa de Pobreza - Córdoba'), obtenerDatos);
router.get('/pobreza-taza-de-pobreza-nacion.json', setRequestInfo('Tasa de pobreza (Nación)', 'Tasa de Pobreza - Nación'), obtenerDatos);
//Precios
router.get('/precios-ipc-cordoba.json', setRequestInfo('Inflación Córdoba (IPC)', 'IPC - Córdoba'), obtenerDatos);
router.get('/precios-ipc-nacion.json', setRequestInfo('Inflación Nación (IPC)', 'IPC - Nación'), obtenerDatos);
//Prevensional
router.get('/previsional-haber-medio.json', setRequestInfo('Haber medio (Córdoba)',  'Haber medio - Córdoba'), obtenerDatos);
//Salarios
router.get('/salarios-indice-total.json', setRequestInfo('Salarios (Índice de Salarios)',  'Índice Total de Salarios'), obtenerDatos);



module.exports = router;