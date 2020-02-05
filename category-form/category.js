import { categoriesArray } from '../data/data.js';
import { getUser, saveUser, findById } from '../common/utils.js';
import renderCategory from './render-category.js';

const categories = categoriesArray.slice();
const user = getUser();

const form = document.querySelector('form');
const progressBar = document.getElementById('progress-bar');

const searchParams = new URLSearchParams(window.location.search);
const categoryId = searchParams.get('id');

const category = findById(categories, categoryId);

renderCategory(category, user);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedInputs = document.querySelectorAll('input:checked');

    selectedInputs.forEach((input) => {
        user.responses[categoryId].push(input.name);

    });
    saveUser(user);

    let currentIndex = categories.indexOf(category);
    const nextIndex = currentIndex + 1;
    const nextCategory = categories[nextIndex];
    const nextCategoryId = nextCategory.id;

    progressBar.value++;

    if (nextIndex < 6) {
        window.location = `./index.html?id=${nextCategoryId}`;
    } else {
        window.location = '../results/';
    }
});
   
  

