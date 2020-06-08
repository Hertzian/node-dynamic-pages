const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});// to add middlewares, next param is a function

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);// body is added by express
    res.redirect('/');
});

module.exports = router;