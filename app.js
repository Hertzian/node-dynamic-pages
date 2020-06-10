const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// ***** pug
// app.set('view engine', 'pug');
// app.set('views', 'views');

// ***** handlebars
// first instance without layouts
// app.engine('hbs', expressHbs({defaultLayout: ''}));
// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
// }));
// app.set('view engine', 'hbs');
// app.set('views', 'views');

// ***** ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

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
    // res.status(404).sendFile(
    //     path.join(__dirname, 'views', '404.html')
    // );
    // ***** pug
    res.status(404).render('404', {pageTitle: '404 Not Found!'});
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