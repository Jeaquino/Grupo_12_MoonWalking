const express = require('express');
const path = require('path');
const app = express()
const port = 3030

app.use(express.static('public'));
app.listen(port, () => console.log('Server running in http://localhost:' + port))

//ACA HAY QUE CAMBIAR EL NOMBRE DE CADA ARCHIVO

// HOME
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
// REGISTRO
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))

app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
// DETALLE
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
//LOGIN
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
//CARRITO
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
 