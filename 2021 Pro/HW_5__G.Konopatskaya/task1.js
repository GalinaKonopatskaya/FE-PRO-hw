//Найти максимальный элемент, а остальные обнулить с помощью цикла.
console.log(`Task 1`)
let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26];
let maxValueIndex;
for (let i = 0; i < (arr.length - 1); i++) {
    // console.log(arr[i]);
    if (arr[i] > arr[i + 1]) {
        maxValueIndex = i;
    }
}

for (let i = 0; i < arr.length; i++) {
    if (i !== maxValueIndex) {
        arr[i] = 0;
    }
}
console.log(arr);

// Согласна, не фонтан...