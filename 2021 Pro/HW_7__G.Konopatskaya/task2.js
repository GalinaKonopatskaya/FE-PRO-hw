// Написать функцию которая бы выводила все элементы массива, любой вложенности. 
// В задании нужно использовать рекурсию.
// let arr = [1 ,2, [3 ,4], 5, [6, 7, [8, 9, 10] ] ];
// showItems(arr) // 1,2,3,4,5,6,7,8,9,10

let arr = [1, 2, [3, 4], 5, [6, 7, [8, 9, 10]]];

function showItems(someArray) {

    for (i = 0; i < someArray.length; i++) {

        if (!Array.isArray(someArray[i])) {

            console.log(someArray[i]);
        } else {

            showItems(someArray[i]);
        }
    }
}


showItems(arr);

