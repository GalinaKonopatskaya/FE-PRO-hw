"use strict"
//------- Product form------

const productForm = document.forms['productForm'];
const catSelect = document.querySelector("#category");
const itemsSelect = document.querySelector("#items");
const attributesDiv = document.querySelector("#attributes");
const submitOrder = document.querySelector("#btnBuy");
const viewProductList = document.querySelector(".view-productlist");

//------- user form-------

const userForm = document.forms['userForm'];
const submitUsForm = document.querySelector('#submitUserData');
const viewUserList = document.querySelector(".view-userlist");



// -----  for POPUP 
const popupLink = document.querySelector('.popup-link');
const body = document.querySelector('body');

let unlock = true;
const timeout = 800;

//--------------------------------------------------------------------------

//    -----       creat product input     ------
createSelectOptions(catSelect, product);

function createSelectOptions(target, obj) {
	const option = document.createElement("option");
	target.innerHTML = "";
	option.value = "";
	option.text = "Выберите категорию..";
	target.add(option);

	for (var key in obj) {
		const option = document.createElement("option");
		option.value = key;
		if (typeof obj[key].name != 'undefined') {
			option.text = obj[key].name;
		}
		else {
			option.text = obj[key];
		}

		target.add(option);
	}

}

function createAttrList(target, attrObj) {
	target.innerHTML = "";
	let htmlText = "";
	for (let key in attrObj) {

		htmlText += `<div><b>${fieldNames[attrObj[key].codeName]}</b>
				<ul  class="attributes" 
					data-attribute="${attrObj[key].codeName}" >`;

		for (let k in attrObj[key].values) {
			htmlText += `<li><input type = "radio" 
						value="${attrObj[key].values[k]}"
						name = "attribute_${attrObj[key].codeName}"
			>&nbsp;${attrObj[key].values[k]} ${attrObj[key].unit} </li>`;
		}

		htmlText += "</ul></div>";

	}
	target.insertAdjacentHTML("beforeend", htmlText);

	/* Create attribute listeners */
	for (let key in attrObj) {
		target.querySelector("ul[data-attribute='" + attrObj[key].codeName + "']").
			addEventListener("change", function (el) {
				checkIsItemsInputSet();
			});
	}
}

//----------

function checkIsItemsInputSet() {
	let emptyValueQty = 0;


	/*Check product selected*/
	if (itemsSelect.value == "") {
		emptyValueQty++;
	}

	/*Check radio attributes*/
	const attributesGroupsList = document.querySelectorAll("ul.attributes");

	attributesGroupsList.forEach(
		ul => (productForm.elements['attribute_' + ul.getAttribute('data-attribute')].value == "" ?
			emptyValueQty++
			:
			''
		)
	);

	/* Enable/Disable buy button */
	if (!emptyValueQty) {
		submitOrder.removeAttribute('disabled');
	}
	else {
		submitOrder.setAttribute('disabled', true);
	}
}



/******ENENT LISTENERS*********/

catSelect.addEventListener("change", function (el) {
	let key = this.value;
	createSelectOptions(itemsSelect, product[key].models);
	createAttrList(attributesDiv, product[key].attrList);

	/* Disable buy button when categry change */
	submitOrder.setAttribute('disabled', true);
});

itemsSelect.addEventListener("change", function (el) {
	checkIsItemsInputSet();
});



//     -----   Submit Forms   ------

submitUsForm.addEventListener("click", function (el) {
	el.preventDefault();

	const category = productForm.elements.category.value;

	const item = productForm.elements.items.value;

	const attributesGroupsList = document.querySelectorAll("ul.attributes");

	let attrList = {};
	attributesGroupsList.forEach(
		ul => attrList[ul.getAttribute('data-attribute')] =
			productForm.elements['attribute_' + ul.getAttribute('data-attribute')].value
	);

	const result = {
		attrList,
		item,
		category,

	};
	viewProductList.innerHTML = "";


	showProduct(result);

});

function showProduct(resultObj) {
	for (let key in resultObj) {
		// const paragraph = document.createElement('p');
		// paragraph.innerText = `${key} - ${resultObj[key]}`;
		if (typeof resultObj[key] === 'object') {
			showProduct(resultObj[key]);
		}
		else {
			viewProductList.insertAdjacentHTML('afterbegin', `<p>${fieldNames[key]} - ${resultObj[key]}</p>`);
		}
	}
}



submitUsForm.addEventListener('click', function (e) {
	e.preventDefault();
	const username = userForm.elements.username.value;
	const usersurname = userForm.elements.usersurname.value;
	const password = userForm.elements.userpas.value;
	const userphone = userForm.elements.userphone.value;
	const email = userForm.elements.email.value;
	const age = userForm.elements.age.value;
	const gender = userForm.elements.gender.value;



	const result = {
		gender,
		age,
		email,
		userphone,
		password,
		usersurname,
		username,
	};

	viewUserList.innerHTML = "";

	showUser(result);


	const popupActive = document.querySelector('.popup.open');
	popupClose(popupActive, false);

});


function showUser(resultObj) {
	for (let key in resultObj) {

		viewUserList.insertAdjacentHTML('afterbegin', `<p>${fieldNames[key]} - ${resultObj[key]}</p>`);

	}

}








//---------- POPUP---------

popupLink.addEventListener("click", function (e) {
	const popupName = popupLink.getAttribute('href').replace('#', '');
	const curentPopup = document.getElementById(popupName);

	const item = productForm.elements.items.value;

	if (item) {
		popupOpen(curentPopup);
		e.preventDefault();
	} else {

		console.log("введен неправильно!")

	}
});


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);


}

function bodyUnLock() {
	setTimeout(function () {
		body.classList.remove('lock');
	}, timeout);
}


document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});