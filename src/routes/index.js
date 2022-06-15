const {Router} = require('express');
const {
    errorHandler
} = require('./middleWares');

const Logger = require('../helpers/logger');

class Routes {
    static configure(app) {
        Logger.info('Loading api...');
        app.use('/api', require('./api')(Router()));
        app.use(errorHandler);
    }
}

module.exports = Routes;
