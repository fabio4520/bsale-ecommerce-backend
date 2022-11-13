const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router')

function routerApi(app) {
 app.use('/products', productsRouter);
 app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
