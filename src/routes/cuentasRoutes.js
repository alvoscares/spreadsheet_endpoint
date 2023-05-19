const { Router } = require('express');
const router = Router();
const cuentasController = require('../controllers/cuentasController');

router.get('/:cuentasPath', cuentasController.getCuentas);

module.exports = router;