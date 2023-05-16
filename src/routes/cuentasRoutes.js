const { Router } = require('express');
const router = Router();
const cuentasController = require('../controllers/cuentasController');

router.get('/:cuentasPath', cuentasController.getCuentas);
//ruta de prueba. Borrar
router.get('/prueba/graficos.json', cuentasController.getPrueba);

module.exports = router;