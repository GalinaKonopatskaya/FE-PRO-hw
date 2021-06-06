//Вывести всю таблицу умножения.

// It may look a little crazy...
document.write("<h1 align=\"center\">Таблица умножения</h1>");
document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" ' +
    'rel="stylesheet" crossorigin="anonymous">');
document.write(`<div class="container m-5">`);
for (i = 1; i <= 10; i++) {
    document.write(`<div class="row align-items-center">`);
    for (j = 1; j <= 10; j++) {
        // Pretty normal for screens 1200px and more
        document.write(`<div class="col text-nowrap  border border-secondary"> ${j} &times; ${i} = ${i * j} </div>`);
        console.log(`${i} * ${j}  = ${i * j}`);
    }
    document.write(`</div>`);
}
document.write(`</div>`);

