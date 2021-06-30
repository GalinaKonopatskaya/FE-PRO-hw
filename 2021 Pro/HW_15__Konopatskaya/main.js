let currensyObj;
let currensyFrom = document.getElementById("currensyFrom");
let currensyTo = document.getElementById("currensyTo");
let convertSum = document.getElementById("convert_input");
let resultSum = document.getElementById("result");
let convertBtn = document.getElementById("convertBtn");

function getJson(url) {

	fetch(url)
		.then(currRetes => currRetes.json())
		.then(json => getArr(json))
		.catch(error => console.log(error));
}

function getArr(obj) {

	createSelectList(obj, currensyFrom);
	createSelectList(obj, currensyTo);
}


getJson('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');


function getConvertedCurrensy() {

	let currensyRateFrom = currensyFrom.value;
	let currensyRateTo = currensyTo.value;

	resultSum.innerHTML =
		(
			parseFloat(convertSum.value) *
			parseFloat(currensyRateFrom) /
			parseFloat(currensyRateTo)
		).toFixed(2);


	console.log('convertSum:' + convertSum.value);
	console.log('currensyRateTo:' + currensyRateTo);
	console.log('currensyRateFrom:' + currensyRateFrom);

}

function createSelectList(json, target) {

	target.insertAdjacentHTML("beforeend", '<option value="1">Українська гривня (UAH)</option>')



	json.forEach(el => {
		// option = document.createElement("option");
		// option.text = el.name;
		// option.value = el.rate;
		// target.appendChild(option);
		target.insertAdjacentHTML("beforeend",

			`<option value="${el.rate}">${el.txt} (${el.cc})</option>`);
	});
}

currensyFrom.addEventListener('change', function (e) {

	getConvertedCurrensy();

});

currensyTo.addEventListener('change', function (e) {

	getConvertedCurrensy();

});


convertSum.addEventListener('change', function (e) {

	getConvertedCurrensy();

});



