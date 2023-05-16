const { Router } = require('express');
const router = Router();
const actividadController = require('../controllers/actividadController');

router.get('/:actividadPath', actividadController.getActividad);

module.exports = router;