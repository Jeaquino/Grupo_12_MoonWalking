module.exports={
    carrito: (req, res)=>{
        return res.render('carrito')
    },
    login: (req, res) =>{
        return res.render('login')
    },
    register: (req, res) => {
        return res.render('register')
    }
}