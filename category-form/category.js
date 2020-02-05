import { categoriesArray } from '../data/data.js';
import { getUser, saveUser, findById } from '../common/utils.js';
import renderCategory from './render-category.js';

const categories = categoriesArray.slice();
const user = getUser();

const form = document.querySelector('form');

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


    if (nextIndex <= 6) {
        const nextCategory = categories[nextIndex];
        const nextCategoryId = nextCategory.id;
        window.location = `./index.html?id=${nextCategoryId}`;
    } else {
        window.location = '../results/';
    }
});
   
  

