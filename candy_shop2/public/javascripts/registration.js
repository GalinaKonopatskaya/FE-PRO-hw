


//------- userForm-------
const userForm = document.forms['userForm'];
const submitUsForm = document.querySelector('#submitUserData');
const viewUserList = document.querySelector(".view-userlist");
const userName = userForm.elements.username;
const userSurname = userForm.elements.usersurname;
const userPhone = userForm.elements.userphone;
const email = userForm.elements.email;

// ----------   Patterns ------

const patName = /[A-ZА-Яa-zа-яёіїє'\-]{2,12}/;
const patSurname = /[A-ZА-Яa-zа-яёіїє'\-]{2,15}/;
const patTel = /0\d{9}/;
const patMail = /^([a-zA-Z0-9_\.\-]{3,})+\@([a-zA-Z0-9\-]{2,})+\.com/;





//-------------FORMS--------

submitUsForm.addEventListener('click', function (e) {
	//e.preventDefault();
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


	// const popupActive = document.querySelector('.popup.open');
	// popupClose(popupActive, false);

});


function showUser(resultObj) {
	for (let key in resultObj) {

		viewUserList.insertAdjacentHTML('afterbegin', `<p>${fieldNames[key]} - ${resultObj[key]}</p>`);

	}

}


userForm.addEventListener('submit', function (event) {
	//event.preventDefault();

	resultInput(userName, patName, "Именем");
	resultInput(userSurname, patSurname, "Фамилией");
	resultInput(userPhone, patTel, "Номером телефона");
	resultInput(email, patMail, "e-mail");


})

function resultInput(input, pattern, name) {
	const chekIndex = input.value.search(pattern);
	if (chekIndex === -1) {
		input.setAttribute(placeholder, 'Нужный текст')

	}
}




userName.addEventListener('keyup', function () {
	this.value = this.value.replace(/^./, this.value[0].toUpperCase());
	const chekIndex = this.value.search(pattern);
	if (chekIndex === -1) {
		this.placeholder = 'Нужный текст';
	}
});

userSurname.addEventListener('keyup', function () {
	this.value = this.value.replace(/^./, this.value[0].toUpperCase());
});

// Replase letters from input phone to ""
userPhone.addEventListener('keyup', function () {
	this.value = this.value.replace(/[^\d]/g, '');
});













