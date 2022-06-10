const { Router } = require('express');
const router = Router();
const { obtenerDatos } = require('../controllers/obtenerDatos');
const { setRequestInfo } = require('../utils/requestInfo');
   


router.get('/dolar-blue.json', setRequestInfo('Blue'), obtenerDatos);
router.get('/dolar-CCL.json', setRequestInfo('CCL'), obtenerDatos);
router.get('/dolar-solidario.json', setRequestInfo('Solidario'), obtenerDatos);
router.get('/dolar-oficial.json', setRequestInfo('Minorista'), obtenerDatos);




module.exports = router;