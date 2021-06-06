// Написать функцию, которая принимает 1 параметр.
// При первом вызове, она его запоминает, при втором — суммирует переданный параметр с тем, 
// что передали первый раз и тд.
// Всё это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28

let tempNumber = 0;

function showSum(param) {

    function getSum() {

        tempNumber += param;
        return tempNumber;
    }

    if (typeof param === 'number') {

        console.log(`${param} + ${tempNumber} = ${getSum()} `);
    } else {

        console.log('Error param');
    }
}

showSum(5);
showSum(20);
showSum("dknbkbn");
showSum(-0.5);
showSum();




