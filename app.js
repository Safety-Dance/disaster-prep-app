import { makeUser, saveUser } from './common/utils.js';

const form = document.getElementById('sign-in-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = makeUser(formData);
    saveUser(user);

    window.location = './category-form/index.html';
});