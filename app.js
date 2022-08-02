const express = require('express');
const path = require('path');
const app = express()
const port = 3031

app.use(express.static('public'));
app.listen(port, () => console.log('Server running in http://localhost:' + port))

// HOME
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
// REGISTRO
app.get('/register', (req,res) => res.sendFile(path.join(__dirname, 'views', 'register.html')))
// DETALLE
app.get('/detalle', (req,res) => res.sendFile(path.join(__dirname, 'views', 'detalle.html')))
//LOGIN
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
//CARRITO
app.get('/carrito', (req,res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html')))
 