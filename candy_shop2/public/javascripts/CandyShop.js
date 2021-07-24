

const CandyShop = {

        init() {

                this.buildOrderList();
                this.sendOrderData();
                this.changeTotalCost();

        },

        dom: {
                // container for all products
                $containerForProductList: document.getElementById("productList"),

                //div for product item
                $productCart: document.getElementsByClassName("product-card"),

                // <button class="buyBtn" data-candy_id="<%= product.id %>" data-cost="<%= product.cost %>"
                $buyBtn: document.querySelectorAll(".buyBtn"),

                //input for quantity of products
                $inputs: document.querySelectorAll(".input"),

                //button that show cart page
                $cartButton: document.getElementById("cart-btn"),
        },


        changeTotalCost() {
                this.dom.$inputs.forEach((input) =>
                        input.addEventListener('change', this.EventHandlers.countTotalCost));

        },

        buildOrderList() {

                if (typeof localStorage.getItem('orderList') === 'undefined') {
                        localStorage.setItem('orderList', {});
                }

                this.dom.$buyBtn.forEach((buttonItem) =>
                        buttonItem.addEventListener('click', this.EventHandlers.buildOrder));


        },

        sendOrderData() {

                this.dom.$cartButton.addEventListener('click', this.EventHandlers.sendCartData);

        },



        EventHandlers: {



                countTotalCost(e) {

                        let div = e.target.parentNode.parentNode.previousElementSibling.querySelector(".totalCost");

                        // let candyId = e.target.getAttribute("data-product_id");
                        let cost = Number(e.target.getAttribute("data-cost"));
                        let quantity = Number(e.target.value);
                        let totalPrise = quantity * cost;

                        div.innerHTML = totalPrise;

                },


                buildOrder(e) {
                        let orderList = JSON.parse(localStorage.getItem('orderList'));

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

                },

                sendCartData() {
                        let data = localStorage.getItem('orderList');

                        let fetchData = {
                                method: 'POST',
                                body: JSON.stringify(data),
                                headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                },
                        }

                        fetch("api/candyshop/cart", fetchData)

                                .then(response => response.json())

                                .then(result => console.log(result))
                },


        },

}


CandyShop.init();


