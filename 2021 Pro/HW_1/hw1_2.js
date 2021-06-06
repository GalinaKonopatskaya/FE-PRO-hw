
let Name = prompt("What is you name?");
let NikName = prompt("What is you Nik-name?");
let e_mail = Name + "@" + NikName + ".gmail.com";

if (Name && NikName) {
    document.write(e_mail);
    console.log(e_mail);
}