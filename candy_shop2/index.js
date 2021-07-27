'use strict'


const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const conf = require('./config'); // конфиги
const staticAsset = require('static-asset');


const candyshop = require('./routes/cs');


// -- экспорт своих классов помощников
const { Product } = require('./source/product');
const { ProductGroup } = require('./source/productGroup');
const { Model } = require('./database/model');




app.set('view engine', 'ejs')  // шаблонизатор
app.use(cors()); //прослойка для cors запросов
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('public'));

app.use('/api/candyshop', candyshop);




//---- маршруты




app.get('/product_container', (req, res) => res.render('product_container.ejs'));




app.get('/', (req, res) => {

  Promise.all([Model.getProducts(), Model.getGroups()]).then((values) => {

    let products = JSON.parse(values[0])
    let groups = JSON.parse(values[1])

    res.render('products', { products: products, groups: groups, title: "Вся продукция" });

  })

});


app.get('/category', function (req, res) {

  Promise.all([Model.getProducts(), Model.getGroups()]).then((values) => {

    let products = JSON.parse(values[0])
    let groups = JSON.parse(values[1])


    let category = [];
    products.forEach(el => {
      if (el.group == req.query.id) {
        category.push(el);
      }
    })

    res.render('products', { products: category, groups: groups, title: req.query.group });

  })

});



app.get('/product', (req, res) => {

  Promise.all([Model.getProducts(), Model.getGroups()]).then((values) => {


    let products = JSON.parse(values[0])
    let groups = JSON.parse(values[1])
    let product = null;

    products.forEach(el => {
      if (el.id == req.query.id) {
        product = el
      }
    })

    res.render('product', { product: product, groups: groups });

  })

});




app.get('/contacts', (req, res) => {

  Promise.all([Model.getProducts(), Model.getGroups()]).then((values) => {


    let products = JSON.parse(values[0])
    let groups = JSON.parse(values[1])
    let product = null;

    products.forEach(el => {
      if (el.id == req.query.id) {
        product = el
      }
    })

    res.render('contacts', { product: product, groups: groups });

  })

});

app.get('/delivery', (req, res) => {

  Promise.all([Model.getProducts(), Model.getGroups()]).then((values) => {


    let products = JSON.parse(values[0])
    let groups = JSON.parse(values[1])
    let product = null;

    products.forEach(el => {
      if (el.id == req.query.id) {
        product = el
      }
    })

    res.render('delivery', { product: product, groups: groups });

  })

});


// app.get('/cart', (req, res) => {

//   Promise.all([Model.getProducts(), Model.getGroups()]).then((values) => {




//     let products = JSON.parse(values[0])
//     let groups = JSON.parse(values[1])
//     let product = null;

//     products.forEach(el => {
//       if (el.id == req.query.id) {
//         product = el
//       }
//     })

//     res.render('cart', { product: product, groups: groups });


//   })

// });


app.post('/order', (req, res) => {

  console.log(req.body)

  res.render('error')

});



app.get('/error', (req, res) => {

  Promise.all([Model.getProducts(), Model.getGroups()]).then((values) => {


    let products = JSON.parse(values[0])
    let groups = JSON.parse(values[1])
    let product = null;

    products.forEach(el => {
      if (el.id == req.query.id) {
        product = el
      }
    })

    res.render('error', { product: product, groups: groups });

  })

});




// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.render('error', {
    message: error.message,
    error: "error"
  });
});




app.listen(conf.PORT, () => {
  console.log('Server starting on port: ' + conf.PORT);
});





