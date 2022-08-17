var express = require('express');
var router = express.Router();
const {detail, store, add} = require('../controllers/productsControllers');

/* GET home page. */
router
.get('/detalle/:id',detail)
.get ('/add',add)
.post('/add',store)

module.exports = router;