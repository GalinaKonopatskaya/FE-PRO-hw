

// CART nodes

var $ProductQuantity = document.querySelectorAll(".cart-product-quantity");
var $dropItem = document.querySelectorAll(".drop-item");
var $cartTotal = document.getElementById("cart-total-cost");


// FORM nodes
const $userForm = document.forms['userForm'];
const $submitUserForm = document.querySelector('#submitUserData');

const $userName = userForm.elements.username;
const $userSurname = userForm.elements.usersurname;
const $userPhone = userForm.elements.userphone;
const $email = userForm.elements.email;
const $selectCountry = document.getElementById("country");
const $selectRegion = document.getElementById("region");
const $city = userForm.elements.city;
const $adress = userForm.elements.adress;
const $comment = userForm.elements.comment;





//  Patterns 

const patName = /[A-ZА-Яa-zа-яёіїє'\-]{2,12}/;
const patSurname = /[A-ZА-Яa-zа-яёіїє'\-]{2,15}/;
const patTel = /0\d{9}/;
const patMail = /^([a-zA-Z0-9_\.\-]{3,})+\@([a-zA-Z0-9\-]{2,})+\.com/;


//------------------------------------------

$ProductQuantity.forEach((input) =>
        input.addEventListener('change', updateBasketItemsCost));

$dropItem.forEach((item) =>
        item.addEventListener('click', removeItem));

function removeItem(e) {
        e.target.closest('tr').remove();

}

function updateBasketItemsCost() {

        cartTotalCost = 0;

        $ProductQuantity.forEach(function (input) {
                let quantity = Number(input.value);
                let price = Number(input.parentNode.parentNode.querySelector(".cart-product-price").value);
                let cost = quantity * price;
                input.parentNode.parentNode.querySelector(".cart-product-cost").value = cost;



                cartTotalCost += cost;
        });
        $cartTotal.innerHTML = cartTotalCost;


        updateCartInLocal()

}

function updateCartInLocal() {
        let candyId = e.target.getAttribute("data-product_id");

        let orderList = JSON.parse(localStorage.getItem('orderList')) || {};

        
        for (item in orderList) {
                orderList[item].quantity = ;
        }









}




//------------------------ form



$submitUserForm.addEventListener('click', function (e) {
        //e.preventDefault();
        const username = $userName.value;
        const usersurname = $userSurname.value;
        const userphone = $userPhone.value;
        const email = $email.value;
        const country = $selectCountry.options[$selectCountry.selectedIndex].value;
        const region = $selectRegion.options[$selectRegion.selectedIndex].value;;
        const city = $city.value;
        const adress = $adress.value;
        const deliveryMethod = document.querySelectorAll('input[name="payMethod"]:checked').value;
        const payMethod = document.querySelectorAll('input[name="payMethod"]:checked').value;
        const comment = document.getElementById("comment").value;






        const result = {
                comment,
                payMethod,
                deliveryMethod,
                adress,
                city,
                region,
                country,
                email,
                userphone,
                usersurname,
                username,
        };


        console.log(result);

});


userForm.addEventListener('submit', function (e) {
        e.preventDefault();
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

        }


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