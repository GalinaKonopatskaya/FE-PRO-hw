

showFullName(person);
person.showAge(year);

showFullName.call(person2);
person.showAge.call(person2, year);

showFullName.call(person3);
person.showAge.call(person3, year);

showFullName.call(person4);
person.showAge.call(person4, year);

showFullName.call(person5);
person.showAge.call(person5, year);

showSomething('Array whith sorted objects by year:', allPersoneArr);

allPersoneArr.sort(flexSort("born"));

showSomething('Array with male persons:', male);
showSomething('Array with female persons:', female);

showSomething(`Sum of all birth years:`, sumYearsOfBorn);



