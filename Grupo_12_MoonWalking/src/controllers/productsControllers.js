const { search } = require('../routes/products');

const products = require('../data/productModule').loadProducts()



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
        const{name,brand,price,discount} = req.body;

        const id = products.lastIndexOf();

        const newProduct = {
            ...req.body,
            id,
            name: name.trim(),
            price: +price,
            discount : +discount,
            brand : brand.trim(),


        } 

    },
    search : (req,res) => {
        const result = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
        return res.render('products',{
            products : result
        })
    }
 }