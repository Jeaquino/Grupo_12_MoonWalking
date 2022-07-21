const express = require('express');
const path = require('path');
const app = express()
const port = 3030

app.use(express.static('public'));
app.listen(port, () => console.log('Server running in http://localhost:' + port))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'detalle.html')))
// HOME
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'home.html')))
// REGISTRO
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'registro.html')))
// DETALLE

//LOGIN
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'login.html')))
//CARRITO
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', 'carrito.html')))
 