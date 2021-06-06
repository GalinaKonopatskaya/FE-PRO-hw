//Напишите код, который выводит все простые числа из интервала от 2 до n. 


let n = parseInt(prompt("enter the last number"));

if (!Number.isNaN(n)) {
    // Метка имеет вид идентификатора с двоеточием перед циклом.
    simpleNumbers:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue simpleNumbers; //управление перейдёт на следующую итерацию цикла с меткой.
        }
        console.log(`${i} - простое число`);
    }
} else {
    alert("please enter a valid number");
}



// Более ресурсоемкий вариант, но имеющий право на жизнь)
// if (!Number.isNaN(n)) {

//     // simpleNumbers:
//     for (let i = 2; i <= n; i++) {
//         let k = 0;
//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 k++;
//                 continue;
//             }
//         }
//         if (k === 0) {
//             console.log(`${i} - простое число`);
//         }
//     }
// } else {
//    alert("please enter a valid number");
// }



