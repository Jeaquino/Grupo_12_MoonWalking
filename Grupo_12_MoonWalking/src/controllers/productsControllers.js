const {storeProducts} = require('../data/productModule')
const products = require('../data/productModule').loadProducts()



module.exports = {
    carrito: (req, res)=>{
        return res.render('./products/carrito')
    },
    edit : (req,res) => {
        const product = products.find(product => product.id === +req.params.id)
        return res.render('./products/productEdit',{
            product,
        })
    },
    update : (req,res) => {
        return res.send(req.body)
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

        const id = products[products.length -1].id;

        const newProduct = {
            ...req.body,
            id: id + 1,
            name: name.trim(),
            price: +price,
            discount : +discount,
            brand : brand.trim(),
            image : "usuario luna blanca.jpg"
        } 
        const productsNew = [...products,newProduct];

        storeProducts(productsNew)
        return res.redirect('/')
    },
    search : (req,res) => {
        const result = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()))
        return res.render('./products/product',{
            products : result,
            keywords : req.query.keywords
        })
    }
 }