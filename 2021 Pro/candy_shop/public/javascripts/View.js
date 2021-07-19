// class View {
//         constructor() {

//         }

//         getProductsHtml(product) {

//                 let result = `<div class = "product-card" data-id = '${product.id}'>
                        
//                                  <figure>
//                                        <img class = "product-img" src= "/images/img/${product.img}" >
//                                                  <figcaption>
//                                                  <a href="#">
//                                                         <h2 >${product.name}</h2>
//                                                         </a>
//                                                         <div class = "cost">
//                                                         <div> <h3 class = "price"> Цена за 1шт. ${product.cost}</h3> </div>
//                                                         <div> <h3 class = "price"> Итого: 00.00</h3> </div>
//                                                         </div>
//                                                         <div class = "quantity">
//                                                         <input type="number" id="count" min="0" value="0">

//                                                         </div>
//                                                         <button type = "button">В корзину</button>
//                                                </figcaption>
                
//                                  </figure>

//                   </div> 
//                 `;

//                 return result;
//         }

// }