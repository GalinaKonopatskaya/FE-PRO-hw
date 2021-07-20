class Group {
        constructor (groupName, groupInfo) {

        this.groupName = groupName;
        this.groupInfo = groupInfo;
        
        this.candys = [];

        }
        
        addCandy(candy) {
        this.candys.push(candy);
        }
        
        [Symbol.iterator](){
                return this.candys[Symbol.iterator]();
        }

        

}




class Candy {
        constructor(name, url, cost, info, id){
        this.name = name;
        this.img = url;
        this.cost = cost;
        this.info = info;
        this.id = id;
 }

 
}
