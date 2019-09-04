const express = require('express');

const productsRouter = require('../routes/products/products-router.js.js');
const clientsRouter = require('../routes/clients/clients-router');
const suppliersRouter = require('../routes/suppliers/suppliers-router');

const server = express();

// global middleware 
server.use(express.json());
server.use('/products', productsRouter);
server.use('/clients', clientsRouter);
server.use('/suppliers', suppliersRouter);

// route handlers
server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
})

// manage products (8 endpoints)
// manage clients (8)
// manage orders (8)
// manage suppliers (8)

//export default server
module.exports = server;