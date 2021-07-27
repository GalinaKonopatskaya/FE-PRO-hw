const express = require('express');
const router = express.Router();


const { Model } = require('../database/model');






router.post('/cart', (req, res, next) => {
    
    let chosenProducts = req.body;

    console.log(chosenProducts)


    let prodCart = [];


    

    Promise.all([Model.getProducts(), Model.getGroups()])
        .then((values) => {

            let products = JSON.parse(values[0])
            
            let groups = JSON.parse(values[1])

            products.forEach(elProduct => {

                for (key in chosenProducts) {

                    if(elProduct.id == chosenProducts[key].candyId){
                        elProduct.totalCost = chosenProducts[key].totalCost
                        elProduct.quantity = chosenProducts[key].quantity
                        prodCart.push(elProduct)
                        
                    }
                  }
                
            });

           
    
            res.render('cart', { products:prodCart, groups: groups, title: "Корзина" });
    
        })
        .catch(err => console.log(err))

});


module.exports = router;