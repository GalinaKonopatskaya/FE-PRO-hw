//вывести все цифры всех массивов
console.log(`Task 2`)
let complexArr = [1, [2, 3], 4, [5, 6], 7, [8, 9]];

//#1
console.log('#1');
for (i = 0; i < complexArr.length; i++) {
    if (!Array.isArray(complexArr[i])) {
        console.log(complexArr[i]);
    }
    else {

        for (j = 0; j < complexArr[i].length; j++) {
            if (!Array.isArray(complexArr[i][j])) {
                console.log(complexArr[i][j]);
            }
            else {
                console.log(`This is array`);
            }
        }
    }
}

//#2
console.log('#2');
console.log(complexArr.toString());

