const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');
   


router.get('/dolar-blue.json', setRequestInfo('Blue'), obtenerDatos);
router.get('/dolar-CCL.json', setRequestInfo('CCL'), obtenerDatos);
router.get('/dolar-solidario.json', setRequestInfo('Solidario'), obtenerDatos);
router.get('/dolar-oficial.json', setRequestInfo('Minorista'), obtenerDatos);
router.get('/actividad-economica-pbi.json', setRequestInfo('PBI a precios constantes (variación interanual)'), obtenerDatos);
router.get('/actividad-economica-emae.json', setRequestInfo('EMAE desestacionalizado (variación mensual)'), obtenerDatos);
router.get('/previsional-haber-medio.json', setRequestInfo('Haber medio'), obtenerDatos);
router.get('/salarios-indice-total.json', setRequestInfo('Índice Total de Salarios (variación interanual)'), obtenerDatos);




module.exports = router;