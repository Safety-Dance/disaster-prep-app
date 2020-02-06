//home page algorithm
import { makeUser, saveUser } from './common/utils.js';

const form = document.getElementById('sign-in-form');

//add an event listener to the form on submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const user = makeUser(formData);
    saveUser(user);

    window.location = './category-form/index.html';
});