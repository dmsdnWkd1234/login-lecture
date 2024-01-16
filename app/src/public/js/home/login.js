'use strict';

const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginbtn = document.querySelector('button');

loginbtn.addEventListener('click', login);

function login() {
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch('/login', {
        method: 'post',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req),
    });
}
