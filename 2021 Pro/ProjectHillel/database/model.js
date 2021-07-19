const fs = require('fs');
const testFs = require('fs').promises;


class Model {


  static  testfunc(filePath) {
    
    fs.readFile("./database/groups.json", "utf-8", 
       function(error, data){
        if(error) throw error; // если возникла ошибка

        let groups = JSON.parse(data)

        res.render('home', {groups:groups});

       }).then(console.log)

 
  }




}



module.exports = {
 
    Model
  
  };