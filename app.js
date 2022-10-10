console.log('Form Validation');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname = false;
let validphone = false;
let validemail = false;
// Jquery :---
$('#success').hide();
$('#failure').hide();

// console.log(name,email,phone);
// Name Validate
name.addEventListener('blur', () => {
    let reg = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = name.value;
    if (reg.test(str)) {
        console.log(`It's Matched`);
        name.classList.remove('is-invalid');
        validname = true;
    }
    else {
        console.log(`It's not Matched`);
        name.classList.add('is-invalid');
        validname = false;
    }
});

// Phone Validate
phone.addEventListener('blur', () => {
    let reg = /^[0-9]{10}$/;
    let str = phone.value;
    if (reg.test(str)) {
        console.log(`It's Matched`);
        phone.classList.remove('is-invalid');
        validphone = true;
    }
    else {
        console.log(`It's not Matched`);
        phone.classList.add('is-invalid');
        validphone = false;
    }
});

// Email Validate
email.addEventListener('blur', () => {
    let reg = /^([\_\.\-0-9a-zA-Z]+)@([\_\.\-0-9a-zA-Z]+)\.(([a-zA-Z]){2,7})$/;
    let str = email.value;
    if (reg.test(str)) {
        console.log(`It's Matched`);
        email.classList.remove('is-invalid');
        validemail = true;
    }
    else {
        console.log(`It's not Matched`);
        email.classList.add('is-invalid');
        validemail = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit');
    let failure = document.getElementById('failure');
    console.log(validname,validemail,validphone);
    // Submit Your Form
    if (validname && validphone && validemail){
        console.log('Name, Phone, Email are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // Jquery :---
        $('#success').show();
        $('#failure').hide();
        setTimeout(() => {
            success.innerHTML= '';
        }, 5000);

    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // Jquery :---
        $('#failure').show();
        $('#success').hide();
        setTimeout(() => {
            failure.innerHTML = '';
        }, 5000);
    }
});