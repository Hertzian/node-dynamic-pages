const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(
        path.join(rootDir, 'views','add-product.html')
    );
});// to add middlewares, next param is a function

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    // console.log(req.body);// body is added by express
    products.push({title: req.body.title});
    res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;