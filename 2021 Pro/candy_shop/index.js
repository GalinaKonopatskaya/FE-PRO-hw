'use strict'




const fs = require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const conf = require('./config'); // конфиги



// -- экспорт своих классов помощников
const { Product } = require('./source/product');
const { ProductGroup } = require('./source/productGroup');
const { Model } = require('./source/model');




app.set('view engine', 'ejs')  // шаблонизатор
//app.use(cors()); //прослойка для cors запросов
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', express.static('public'));


//---- маршруты

app.get('/test', function (req, res) {


  let id = req.query.id;

  res.render('test', { id: id });

});

app.get('/product_container.ejs', (req, res) => res.render('product_container.ejs'));



app.get('/', function (req, res) {

  fs.readFile("./database/groups.json", "utf-8",
    function (error, data) {
      if (error) throw error; // если возникла ошибка

      let groups = JSON.parse(data)

      res.render('home', { groups: groups });

    })

});





app.get('/category', function (req, res) {


  fs.readFile("./database/products.json", "utf8",
    function (error, data) {

      if (error) throw error; // если возникла ошибка

      let products = JSON.parse(data)
      let category = [];

      products.forEach(el => {
        if (el.group == req.query.id) {
          category.push(el);
        }
      })


      fs.readFile("./database/groups.json", "utf-8",
        function (error, data) {
          if (error) throw error; // если возникла ошибка

          let groups = JSON.parse(data)


          res.render('allProducts', { products: category, groups: groups, title: req.query.group });

        })

    });

});




app.get('/allproducts', (req, res) => {


  fs.readFile("./database/products.json", "utf8",
    function (error, data) {

      if (error) throw error; // если возникла ошибка

      let products = JSON.parse(data)

      fs.readFile("./database/groups.json", "utf-8",
        function (error, data) {
          if (error) throw error; // если возникла ошибка

          let groups = JSON.parse(data)

          res.render('allProducts', { products: products, groups: groups, title: "Вся продукция" });

        })

    });

});




app.listen(conf.PORT, () => {
  console.log('Server starting on port: ' + conf.PORT);
});





