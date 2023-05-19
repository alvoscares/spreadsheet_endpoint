const { Router } = require('express');
const router = Router();
const previsionalController = require('../controllers/previsionalController');

router.get('/:previsionalPath', previsionalController.getPrevisional);

module.exports = router;