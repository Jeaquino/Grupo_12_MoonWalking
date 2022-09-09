const {loadProducts,loadSection} = require('../data/productModule')

module.exports={
    home: (req, res)=>{
        const products = loadProducts();
        return res.render('home',{
            products
        });
    },
    home2: (req, res)=>{
        const section = loadSection();
        console.log(section);
        const products = loadProducts();
        const selecction = [];
        section.forEach(seccion => {
            console.log(seccion);
            const list = products.filter(product => product.section == seccion )
            selecction.push(list);
        });
        console.log(selecction);
        return res.render('home',{
            selecction
        });
    },
}