require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express()

app.use(express.static('public'));
app.listen(process.env.PORT || 3031, () => console.log('Server running in http://localhost:' + process.env.PORT || 3031))

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

/*
let ocultarTextoBtn = document.getElementById('ocultarTextoBtn')
let ocultarTexto = document.getElementById('ocultarTexto')

ocultarTextoBtn.addEventListener('click', toggleText);
function toggleText() {
    ocultarTexto.classList.toggle('show')
    
    if(ocultarTexto.classList.add('show')){
        ocultarTextoBtn.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
    }
    else{
        ocultarTextoBtn.innerHTML = '<i class="fa-solid fa-angle-down"'        
    }
}*/