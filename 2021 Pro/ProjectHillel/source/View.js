// class ProductView {
//         constructor(containern) {
//             this.container = container;

//         }
    
//         renderAllProducr({ iconUrl, value }) {
    
//             const fragment = document.createDocumentFragment();
//             const img = this.getElement("img", { src: iconUrl })
//             fragment.append(img);
    
//             const p = this.getElement("p");
//             p.innerText = value;
//             fragment.append(p);
    
//             this.container.append(fragment);
//         }
    
//         getElement(tagName, options) {
//             const $el = document.createElement(tagName);
//             if (options) {
//                 Object.keys(options).forEach(attrName => {
//                     $el.setAttribute(attrName, options[attrName])
//                 })
//             }
//             return $el;
//         }
// }

// module.exports = {
 
//    ProductView
  
// };