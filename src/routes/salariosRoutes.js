const { Router } = require('express');
const router = Router();
const salariosController = require('../controllers/salariosController');

router.get('/:salariosPath', salariosController.getSalarios);

module.exports = router;