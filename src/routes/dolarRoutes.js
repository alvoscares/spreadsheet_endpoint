const { Router } = require('express');
const router = Router();
const dolarController = require('../controllers/dolarController');

router.get("/:dolarPath", dolarController.getDolar)

module.exports = router;