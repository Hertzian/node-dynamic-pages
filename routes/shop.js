const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

// router.get('/', (req, res, next) => {
//     // console.log('In another middleware!');
//     res.send('<h1>Hello from Express</h1>');
// });// to add middlewares, next param is a function

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    res.sendFile(
        path.join(rootDir, 'views', 'shop.html')
    );
});

module.exports = router;