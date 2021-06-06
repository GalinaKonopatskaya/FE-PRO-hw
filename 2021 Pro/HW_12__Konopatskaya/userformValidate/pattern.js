//1 Имя - не меньше 3 и не больше 12 символов и - (буквенных),
//2 Email : не меньше 3 символа в начале, знак собачки, ещё от 2 ситмволов и заканчивается на .com
//3 Телефон: 10 цифренных символов начинается на 0 (066...)
// и фамилии, что бы им скучно не было)

"use strict"

const userForm = document.querySelector('.userForm');
const validateBtn = userForm.querySelector('#submitUserData');

const userName = userForm.elements.username;
const userSurname = userForm.elements.usersurname;
const userPhone = userForm.elements.userphone;
const email = userForm.elements.email;

const patName = /[A-ZА-Яa-zа-яёіїє'\-]{2,12}/;
const patSurname = /[A-ZА-Яa-zа-яёіїє'\-]{2,15}/;
const patTel = /0\d{9}/;
const patMail = /^([a-zA-Z0-9_\.\-]{3,})+\@([a-zA-Z0-9\-]{2,})+\.com/;

//const onvalidats = userForm.querySelectorAll(".onvalidate");



userForm.addEventListener('submit', function (event) {
        event.preventDefault();


        console.log('имя: ', userName.value);
        console.log("фамилия:", userSurname.value);
        console.log('номер телефона:', userPhone.value);
        console.log('email: ', email.value);

        resultInput(userName, patName, "Именем");
        resultInput(userSurname, patSurname, "Фамилией");
        resultInput(userPhone, patTel, "Номером телефона");
        resultInput(email, patMail, "e-mail");
})

function resultInput(input, pattern, name) {
        const chekIndex = input.value.search(pattern);
        if (chekIndex === -1) {
                let error = document.createElement('div');

                error.className = 'error';
                error.style.color = 'red';
                error.innerHTML = 'Cannot be blank';
                // userForm[i].parentElement.insertBefore(error, onvalidats[i]);
                // for (let i = 0; i < errors.length; i++) {
                //         errors[i].remove();
                //}
                alert(`Поле с ${name} заполнено не верно`);
        }


        console.log(chekIndex);
}

userName.addEventListener('keyup', function () {
        this.value = this.value.replace(/^./, this.value[0].toUpperCase());
});

userSurname.addEventListener('keyup', function () {
        this.value = this.value.replace(/^./, this.value[0].toUpperCase());
});

// Replase letters from input phone to ""
userPhone.addEventListener('keyup', function () {
        this.value = this.value.replace(/[^\d]/g, '');
});