

const CandyShop = {

        init() {

                this.buildOrderList();
                this. sendOrderData();

        },

        Dom: {
                $containerForProductList: document.getElementById("productList"),
                $productCart: document.getElementsByClassName("product-card"),
                $buyBtn: document.querySelectorAll(".buyBtn"),
                $quantityBtns: document.getElementsByClassName("quantity-change"),
                $inputs: document.querySelectorAll(".input"),
                $cartButton: document.getElementById("cart-btn"),
        },

        buildOrderList() {
                let orderList = {};

                localStorage.setItem('orderList', JSON.stringify(orderList));

                this.Dom.$buyBtn.forEach((buttonItem) =>
                                                buttonItem.addEventListener('click', this.EventHandlers.clickHandler));

                this.Dom.$inputs.value = "";
        },

        sendOrderData(){

                this.Dom.$cartButton.addEventListener('click', this.EventHandlers.sendCartData);

        },

        changeCartQuantity(){

        },

        EventHandlers: {

                clickHandler(e) {
                        let orderList = JSON.parse(localStorage.getItem('orderList'));

                        let candyId = e.target.getAttribute("data-candy_id");

                        let cost = +e.target.getAttribute("data-cost");

                        let quantity = +document.querySelector('input[data-id="' + candyId + '"]').value;
                        
                        
                        console.log(orderList);
                        
                        quantity = (
                                typeof orderList['item' + candyId] !== 'undefined' ? 
                                
                                orderList['item' + candyId].quantity : 0
                                
                                ) + quantity;
                                
                        let totalCost = cost * quantity;
                        
                        orderList['item' + candyId] = {

                                candyId, totalCost, quantity
                        };

                        console.log(candyId, `quant="${quantity}"`);

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


