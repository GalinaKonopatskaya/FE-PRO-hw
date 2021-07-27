

const CandyShop = {

        init() {
                if (typeof localStorage.getItem('orderList') === 'undefined') {
                        localStorage.setItem('orderList', {});
                }

                this.initListeners();

                this.sendOrderData();

                //count quantity of items
                this.cartItemsQuantity();
                // this.filterByPrice()

        },

        dom: {
                // container for all products
                $containerForProductList: document.getElementById("productList"),

                //div for product item
                $productCart: document.getElementsByClassName("product-card"),

                //div for product item
                $cartTotal: document.getElementById("cartTotal"),

                // <button class="buyBtn" data-candy_id="<%= product.id %>" data-cost="<%= product.cost %>"
                $buyBtn: document.querySelectorAll(".buyBtn"),

                //input for quantity of products
                $inputs: document.querySelectorAll(".input"),

                //button that show cart page
                $cartButton: document.getElementById("cart-btn"),

                $sortByLowPrice: document.getElementById("priсe-from"),
                $sortByHightPrice: document.getElementById("priсe-to"),
                $initSerchBtn: document.getElementById("init-serch"),
        },




        initListeners() {
                this.dom.$inputs.forEach((input) =>
                        input.addEventListener('change', this.EventHandlers.countTotalCost));


                this.dom.$buyBtn.forEach((buttonItem) =>
                        buttonItem.addEventListener('click', this.EventHandlers.addToCart));


                this.dom.$initSerchBtn.addEventListener('click', this.EventHandlers.filterByPrice);
        },




        sendOrderData() {

                this.dom.$cartButton.addEventListener('click', this.EventHandlers.sendCartData);

        },

        cartItemsQuantity() {
                let orderList = JSON.parse(localStorage.getItem('orderList')) || {};

                let totalQuantity = 0;

                for (item in orderList) {
                        totalQuantity += orderList[item].quantity;
                }

                //this.dom.$cartTotal.innerHTML = totalQuantity;
        },


        EventHandlers: {

                filterByPrice(e) {
                        console.log(this.dom.$sortByLowPrice.value, this.dom.$sortByHightPrice.value,);


                },



                countTotalCost(e) {

                        let div = e.target.parentNode.parentNode.previousElementSibling.querySelector(".totalCost");

                        // let candyId = e.target.getAttribute("data-product_id");
                        let cost = Number(e.target.getAttribute("data-cost"));
                        let quantity = Number(e.target.value);
                        let totalPrice = quantity * cost;

                        div.innerHTML = totalPrice;

                },


                addToCart(e) {
                        let orderList = JSON.parse(localStorage.getItem('orderList')) || {};

                        let candyId = e.target.getAttribute("data-product_id");

                        let cost = Number(e.target.getAttribute("data-cost"));


                        let quantity = Number(document.querySelector('input[data-product_id="' + candyId + '"]').value);

                        if (typeof orderList['item' + candyId] !== 'undefined') {


                                quantity = orderList['item' + candyId].quantity + quantity;
                        }

                        let totalCost = cost * quantity;


                        orderList['item' + candyId] = {

                                candyId, totalCost, quantity
                        };

                        localStorage.setItem('orderList', JSON.stringify(orderList));

                        e.target.previousElementSibling.querySelector('input').value = "";

                        //?????
                        this.cartItemsQuantity;


                },


                sendCartData() {


                        let data = localStorage.getItem('orderList');

                        console.log(data)

                        let fetchData = {
                                method: 'POST',
                                body: data,
                                headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                },
                        }

                        fetch("api/candyshop/cart", fetchData)
                                .then(res => {
                                        return res.text()
                                })
                                .then(res => {
                                        document.body.innerHTML = res
                                        //window.location = '/cart'
                                })
                },


        },

}


CandyShop.init();


