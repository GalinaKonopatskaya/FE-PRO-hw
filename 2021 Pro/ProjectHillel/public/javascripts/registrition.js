// -----  for POPUP 
const popupLinks = document.querySelectorAll('.popup-link');
console.log(popupLinks);
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lockPadding');
let unlock = true;
const timeout = 800;


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


//---------------POPUP-------------

if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
                const popupLink = popupLinks[index];
                popupLink.addEventListener("click", function (e) {
                        const popupName = popupLink.getAttribute('href').replace('#', '');
                        console.log(popupName);
                        const curentPopup = document.getElementById(popupName);
                        console.log("curentPopup =", curentPopup);
                        popupOpen(curentPopup);
                        e.preventDefault();
                });
        }
}

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
        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";

        for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = lockPaddingValue;
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
                unlock = true;
        }, timeout);


}

function bodyUnLock() {
        setTimeout(function () {
                if (lockPadding.length > 0) {
                        for (let index = 0; index < lockPadding.length; index++) {
                                const el = lockPadding[index];
                                el.style.paddingRight = '0px';
                        }
                }
                body.style.paddingRight = '0px';
                body.classList.remove('lock');
        }, timeout);
}


document.addEventListener('keydown', function (e) {
        if (e.which === 27) {
                const popupActive = document.querySelector('.popup.open');
                popupClose(popupActive);
        }
});

(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var el = this;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
})();


// //-------------FORMS--------

// submitUsForm.addEventListener('click', function (e) {
// 	//e.preventDefault();
// 	const username = userForm.elements.username.value;
// 	const usersurname = userForm.elements.usersurname.value;
// 	const password = userForm.elements.userpas.value;
// 	const userphone = userForm.elements.userphone.value;
// 	const email = userForm.elements.email.value;
// 	const age = userForm.elements.age.value;
// 	const gender = userForm.elements.gender.value;



// 	const result = {
// 		gender,
// 		age,
// 		email,
// 		userphone,
// 		password,
// 		usersurname,
// 		username,
// 	};

// 	viewUserList.innerHTML = "";

// 	showUser(result);


// 	// const popupActive = document.querySelector('.popup.open');
// 	// popupClose(popupActive, false);

// });


// function showUser(resultObj) {
// 	for (let key in resultObj) {

// 		viewUserList.insertAdjacentHTML('afterbegin', `<p>${fieldNames[key]} - ${resultObj[key]}</p>`);

// 	}

// }


// userForm.addEventListener('submit', function (event) {
// 	//event.preventDefault();

// 	resultInput(userName, patName, "Именем");
// 	resultInput(userSurname, patSurname, "Фамилией");
// 	resultInput(userPhone, patTel, "Номером телефона");
// 	resultInput(email, patMail, "e-mail");


// })

// function resultInput(input, pattern, name) {
// 	const chekIndex = input.value.search(pattern);
// 	if (chekIndex === -1) {
// 		input.setAttribute(placeholder, 'Нужный текст')

// 	}
// }




// userName.addEventListener('keyup', function () {
// 	this.value = this.value.replace(/^./, this.value[0].toUpperCase());
// 	const chekIndex = this.value.search(pattern);
// 	if (chekIndex === -1) {
// 		this.placeholder = 'Нужный текст';
// 	}
// });

// userSurname.addEventListener('keyup', function () {
// 	this.value = this.value.replace(/^./, this.value[0].toUpperCase());
// });

// // Replase letters from input phone to ""
// userPhone.addEventListener('keyup', function () {
// 	this.value = this.value.replace(/[^\d]/g, '');
// });
















// // ANIMATION

// const animashki = document.querySelectorAll('.anim-item');

// if (animashki.length > 0) {
//         window.addEventListener('scroll', animOnScroll);
//         function animOnScroll() {
//                 for (let index = 0; index < animashki.length; index++) {
//                         const animashka = animashki[index];
//                         const animashkaHeight = animashka.offsetHeight;
//                         const animashkaOffset = offset(animashka).top;
//                         const animStart = 4;

//                         let animashkaPoint = window.innerHeight - animashkaHeight / animStart;
//                         if (animashkaHeight > window.innerHeight) {
//                                 animashkaPoint = window.innerHeight - animashkaHeight / animStart;
//                         }
//                         if ((pageYOffset > animashkaOffset - animashkaPoint) && pageYOffset < (animashkaOffset + animashkaHeight)) {
//                                 animashka.classList.add('_active');
//                         } else {
//                                 animashka.classList.remove('_active');
//                         }
//                 }
//         }

//         function offset(el) {
//                 const rect = el.getBoundingClientRect(),
//                         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//                         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//                 return { top: rect.top + scrollTop, left: rect.left + screenLeft }
//         }
//         animOnScroll();
// }

