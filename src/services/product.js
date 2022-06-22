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

    static async getById() {
        const productos = await this.getAll();
        return productos.find(producto => producto.id === id) || null;
    }    
}

module.exports = ProductService;