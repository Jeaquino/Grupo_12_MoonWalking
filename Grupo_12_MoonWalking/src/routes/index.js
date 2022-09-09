var express = require('express');
var router = express.Router();
const {home,home2} = require('../controllers/indexControllers');

/* GET home page. */
router
.get('/', home2)

module.exports = router;
