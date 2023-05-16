const { Router } = require('express');
const router = Router();
const preciosController = require('../controllers/preciosController');

router.get('/:preciosPath', preciosController.getPrecios);

module.exports = router;