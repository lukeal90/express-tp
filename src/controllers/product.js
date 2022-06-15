const {ProductService} = require('../services');

class ProductController {

    static async getAll(req, res) {
        try {
            let productos = await ProductService.getAll();
            res.send(productos);
        } catch (error) {
            console.log("Algo salio mal al obtener los productos : " + error.message);
        }
    }

    static async productRandom(req, res) {
        try {
            let productos = await ProductService.getAll();

            if (productos.length == 0) {
                return res.status(403).send({"msg" : "No hay productos"});
            }  
            
            const random = Math.floor(Math.random()*productos.length);
            res.send(productos[random]);              
        } catch (error) {
            console.log("Algo salio mal al obtener un producto random : " + error.message);
        }
    }    
}

module.exports = ProductController;