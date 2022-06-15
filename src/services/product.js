const fs = require('fs').promises;
const path = require('path');
const pathFile = "../../public/productos.txt"

class ProductService{

    static async getAll() {
        let productos =  await fs.readFile(path.resolve(__dirname, pathFile));

        if(productos.length > 0 ){
            productos = JSON.parse(productos);
        }else{
            productos = [];
        }
        return productos;
    }
}

module.exports = ProductService;