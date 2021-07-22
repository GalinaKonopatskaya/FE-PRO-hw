
const fs = require('fs').promises;


class Model {


  static getProducts() {

    return fs.readFile("./database/products.json", "utf-8", 
    function(error, data){
     if(error) throw error; // если возникла ошибка

     resolve(data)

    })

  }


  static getGroups(){

    return fs.readFile("./database/groups.json", "utf-8", 
    function(error, data){
     if(error) throw error; // если возникла ошибка

     resolve(data)

    })

  }



  

  
}



module.exports = {
 
    Model
  
  };