const { Router } = require('express');
const router = Router();
const cuentasController = require('../controllers/cuentasController');

router.get('/:cuentasPath', cuentasController.getCuentas);
//ruta de prueba. Borrar
router.get('/prueba/multiple.json', cuentasController.getPrueba);
router.get('/prueba/alvo.json', cuentasController.getPruebaAlvo);

module.exports = router;