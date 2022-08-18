const products = require('../views/products/productModule').loadProducts()



module.exports = {
    carrito: (req, res)=>{
        return res.render('./products/carrito')
    },
    detail: (req, res)=>{
         const product = products.find(product => product.id === +req.params.id);

        return res.render('./products/detalle',{
            product
        })}, 
    add : (req,res)=>{
        return res.render('./products/productAdd')
    },
    store : (req,res)=>{
        return res.send(req.body)
    }
 }