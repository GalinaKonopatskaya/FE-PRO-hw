// Дана структура организации. Написать функционал
// которыйя выводит имена всех сотрудников. 
// Глубина и уровень вложенности структуры заранее не известны.


function showName(inputObject, indexName) {

    for (key in inputObject) {

        if (typeof inputObject[key] !== 'object' && key == indexName) {

            console.log(inputObject[key]);
        } else {

            showName(inputObject[key], indexName);
        }
    }
}

showName(organization, 'name');

