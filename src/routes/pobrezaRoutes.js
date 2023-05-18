const { Router } = require('express');
const router = Router();
const pobrezaController = require('../controllers/pobrezaController');

router.get('/tasa/:pobrezaPath', pobrezaController.getPobrezaTasa);
router.get('/canasta/:pobrezaPath', pobrezaController.getPobrezaCanasta);

module.exports = router;