const express = require('express');
const path = require('path');
const app = express()
const port = 3030

app.use(express.static('public'));
app.listen(port, () => console.log('Server running in http://localhost:' + port))

//ACA HAY QUE CAMBIAR EL NOMBRE DE CADA ARCHIVO
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'views', '.html')))
 