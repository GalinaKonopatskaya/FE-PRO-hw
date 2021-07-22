

const CandyShop = {

        init: async function () {
                let data = await this.Data.load("/database/products.json");
                this.onDataLoaded(data);

        },

        onDataLoaded(data) {
                this.Data.products = data.map(function (obj) {
                        //console.log(typeof Candy);
                        let candy = new Candy(obj.name, obj.url, obj.cost, obj.info, obj.id);

                        return candy;

                });
                // this.Data.groups = data.map(function (obj) {
                //         //console.log(typeof Candy);
                //         let group = new Group (obj.groupName, obj.groupInfo);
                //
                //         obj.products.forEach((product) =>{
                //          let candy =  new Candy(candy.name, candy.url, candy.cost, candy.info);
                //          group.addCandy(candy)
                //         return group});
                // });

                this.bildProductsList();
        },

        bildProductsList() {

                let viewProducts = new View();
                let str = "";
                this.Data.products.forEach(function (products) {
                        str += viewProducts.getProductsHtml(products);
                })
                this.Dom.$containerForProductList.innerHTML = str;
                this.Dom.$containerForProductList("change", this.EventHandlers.chandeHandler)

        },

        EventHandlers : {
                
                chandeHandler

        },



        Dom: {
                $containerForProductList: document.getElementById("productList")


        },

        Data: {
                load(path) {
                        return new Promise(function (resolve, reject) {
                                let xhr = new XMLHttpRequest;
                                xhr.open("GET", path, true);
                                xhr.onload = function () {
                                        try {
                                                let d = JSON.parse(this.responseText);
                                                resolve(d);

                                        } catch (e) {
                                                reject("Error while parsing JSON!!!");
                                        }

                                };
                                xhr.onerror = function () {
                                        reject("Error while loading data!!!");
                                }
                                xhr.send(null);
                        })
                },

                products: []
        }
}


CandyShop.init();








