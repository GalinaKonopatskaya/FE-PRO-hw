const productListContainer = document.getElementById('productList');







products.forEach((product) => {
        const ejs = `
<div class = "product-card">
        <a href="#">
                <figure>
                        <img class = "product-img" src="https://konfet.net/image/cache/catalog/products/konfety/truffuno_box_1200x800-min-1200x800.jpg" >
                                <figcaption">
                                        <h2 >${product.name}</h2>
                                        <h3>Price: ${product.cost}</h3>
                                        <p>${product.info}</p>
                                </figcaption>
                                
                </figure>
        </a>
  </div> 
 `;
        productListContainer.insertAdjacentHTML('beforeend', ejs);

})

