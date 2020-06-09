const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(
    path.join(__dirname, 'public')
));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

// 404 page
app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found!</h1>');
    res.status(404).sendFile(
        path.join(__dirname, 'views', '404.html')
    );
})

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next();// This next func is to proceed to next middleware
// });// to add middlewares, next param is a function





app.listen(3000, () => {
    console.log('Listen port 3000');
});



// rgb(55, 137, 192)//light
// rgb(42, 102, 141)