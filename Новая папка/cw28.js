// Task 1  25 min

// let animal = {
//     name: "animal",
//     age: 10,
//     owner: null,
//     childs: ["child 1", "child 2"]
// };


// let cat = clone(animal);
// cat.name = "cat";
// cat.age = 5;
// cat.childs.push("cat 3");

// console.log(cat.name, cat.age); // cat 5
// console.log(cat.childs); // [ 'child 1', 'child 2', 'cat 3' ]

// console.log(animal.name, animal.age); // cat 5  !!! Ups it's not correct
// console.log(animal.childs); // [ 'child 1', 'child 2', 'cat 3' ] !!! Ups it's not correct

// function clone(obj) {
//    let 


//     return newObj ;
// }


// Task 2  - 25 min
const users = [
    {id: 2503, name: "Boris", phone: "+386598525", email: "boris@lux.com"},
    {id: 2545, name: "Tolia", phone: "+386698554", email: "tolis@laz.com"},
    {id: 2613, name: "Valera", phone: "+38659866", email: "lera@don.com"}
]



function search(arg) {
    // let input = document.....
    const result = users.filter((user) =>
    { 
        // for (key in users) {
        // if (typeof users.key.values == "string") {

        // return users.key.toLowerCase().includes(arg.toLowerCase())
        //      }
        // }
        let isFit = false;

        Object.values(user).map((value) =>{
            if (value.toLowerCase().includes(arg.toString.toLowerCase())) {
                isFit =  true;
            } else if (value.toString.includes(arg.toLowerCase())) {
                isFit =  true;
            }

           // return users.key.toLowerCase().includes(arg.toLowerCase())
        }

        )
       
    }
)

}

// console.log(arg);
// // Task 3 15 min
// // Connect with html

// Task 4 5 min
// Add several rows of code for get Ex. Res.
// Promise
//     .resolve('a')
//     .then((x) => {console.log(x);
//         return "b" }
//     .then((x) => {console.log(x)} )
//     .then((x) => console.log(x));

// Expected result: a, b, c

// Task 5 40 min
const content = {
    totalPages: 3,
    pages: [
        {pageId: 1, content: "Page - 1" },
        {pageId: 2, content: "Page - 2" },
        {pageId: 3, content: "Page - 3" },
    ]
}

const targetSpan = document.getElementById("pages");
const spanGroup = document.querySelectorAll('span');
const renderBox = document.getElementById("total");
console.log(spanGroup);

let consoleSpan = function() {



}

// targetSpan.addEventListener('click', consoleSpan);

// // Implement pagination
// // add next/prev   buttons

// // Task 6 30 min
// // Implement input  + btn copy
// // click - copy input value to clipboard