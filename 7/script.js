// let text=document.querySelector('.text');


// text.setAttribute('id','lesson8');

// text.setAttribute('style','color:yellow; background-color:blue;')

// text.setAttribute('class','text text-danger bg-warning p-5');


/////////////////////////////

"use strict";

let notif = document.querySelector('#notif'),
    input = document.querySelector('input'),
    sendBtn = document.querySelector('.btn-primary'),
    indicator = document.querySelector('#indicator');





input[0].addEventListener('focus', (e) => {
    e.target.setAttribute('style', 'border:2px solid green');
    e.target.setAttribute('placeholder', 'Enter Username')
})

input[0].addEventListener('blur', (e) => {
    if (e.target.value.trim().length === 0) {
        e.target.setAttribute('style', 'border:2px solid red');
        e.target.setAttribute('placeholder', 'Please fill input . . . ');
    } else {
        e.target.setAttribute('style', 'border:2px solid green');
    }
})

input[1].addEventListener('focus', (e) => {
    e.target.setAttribute('style', 'border:2px solid green');
    e.target.setAttribute('placeholder', `Enter Password`);


    if (input[0].value.trim().length === 0) {
        input[0].setAttribute('style', 'border:2px solid red');
        input[0].setAttribute('placeholder', 'Please fill input . . . ');
    } else {
        input[0].setAttribute('style', 'border:2px solid green');

    }


})

input[1].addEventListener('blur', (e) => {
    if (input[0].value.trim().length === 0) {
        input[0].setAttribute('style', 'border:2px solid red');
        input[0].setAttribute('placeholder', 'Please fill input . . . ');
    } else {
        input[0].setAttribute('style', 'border:2px solid green');

    }

})

indicator.addEventListener('click', (e) => {
    if (input[1].getAttribute('type'.tolowerCase() === 'password')) {
        input[1].setAttribute('type', 'text');
        indicator.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    } else {
        input[1].setAttribute('type', 'password');
        e.target.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    }
})