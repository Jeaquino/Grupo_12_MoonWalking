const fs = require('fs');
const path = require('path')

const loadProducts = ()=>{
    return JSON.parse(fs.readFileSync(path.join(__dirname,'allProducts.json'),'utf-8'))
}

const loadSection = ()=>{
    return JSON.parse(fs.readFileSync(path.join(__dirname,'section.json'),'utf-8'))
}



const storeProducts = (products) => {
    fs.writeFileSync(path.join(__dirname,'product.json'), JSON.stringify(products,null,3),'utf-8')
}

module.exports ={
    loadProducts,
    storeProducts,
    loadSection
}