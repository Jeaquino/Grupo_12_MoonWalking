var express = require('express');
var router = express.Router();


const {login, register}  = require('../controllers/userControllers');
/* GET users listing. */

router
.get('/login', login)
.get('/register', register)
.get('/', function(req, res, next) {
    res.send('respond with a resource');
    })

module.exports = router;