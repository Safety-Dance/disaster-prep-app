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

// what if there is no match? should we redirect the user? otherwise there will be a messy js error if `renderCategory` gets called
const category = findById(categories, categoryId);

renderCategory(category, user);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedInputs = document.querySelectorAll('input:checked');

    const responses = user.responses[categoryId];

    selectedInputs.forEach((input) => {
        responses.push(input.name);
    });

    if (!responses.length) {
        alert(`Please choose at least one option by clicking a checkbox.`);
        return;
    }

    user.progress++;

    saveUser(user);

    // cool logic!
    let currentIndex = categories.indexOf(category);
    const nextIndex = currentIndex + 1;
    if (nextIndex <= categories.length - 1) { // since categoriesArray.length is 7, i assume this works
        const nextCategory = categories[nextIndex];
        const nextCategoryId = nextCategory.id;
        window.location = `./index.html?id=${nextCategoryId}`;
    }
    else {
        window.location = '../results/';
    }
});




