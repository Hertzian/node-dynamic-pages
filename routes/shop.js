const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>');
});// to add middlewares, next param is a function

module.exports = router;