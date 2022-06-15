const { ProductController } = require('../../controllers');


module.exports = router => {
    router.get('/allProducts', ProductController.getAll);
    router.get('/productRandom', ProductController.productRandom);
    return router;
};