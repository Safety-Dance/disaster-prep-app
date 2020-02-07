import { categoriesArray } from '../data/data.js';
import { getUser, saveUser, findById } from '../common/utils.js';
import renderCategory from './render-category.js';

const categories = categoriesArray.slice();
const user = getUser();

const form = document.querySelector('form');
const progressBar = document.getElementById('progress-bar');
progressBar.value = user.progress;

const searchParams = new URLSearchParams(window.location.search);
const categoryId = searchParams.get('id');

if (!categoryId) {
    window.location = './index.html?id=water';
}

const category = findById(categories, categoryId);

renderCategory(category, user);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedInputs = document.querySelectorAll('input:checked');

    selectedInputs.forEach((input) => {
        user.responses[categoryId].push(input.name);
    });

    if (user.responses[categoryId].length === 0) {
        alert(`Please choose at least one option by clicking a checkbox.`);
        return;
    }

    user.progress++;

    saveUser(user);

    let currentIndex = categories.indexOf(category);
    const nextIndex = currentIndex + 1;
    if (nextIndex <= 6) {
        const nextCategory = categories[nextIndex];
        const nextCategoryId = nextCategory.id;
        window.location = `./index.html?id=${nextCategoryId}`;
    }
    else {
        window.location = '../results/';
    }
});




