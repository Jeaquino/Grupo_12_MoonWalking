var express = require('express');
var router = express.Router();
const {detail} = require('../controllers/productsControllers');

/* GET home page. */
router.get('/detalle', detail);

module.exports = router;