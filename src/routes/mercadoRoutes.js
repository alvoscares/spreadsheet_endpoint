const { Router } = require('express');
const router = Router();
const mercadoController = require('../controllers/mercadoController');

router.get('/tasa/:mercadoPath', mercadoController.getMercadoTasa);
router.get('/eph/:mercadoPath', mercadoController.getMercadoEph);

module.exports = router;