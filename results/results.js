import { getUser } from '../common/utils.js';
import { categoriesArray } from '../data/data.js';
import { renderCategoryDiv } from './render-category-div.js';

const user = getUser();
const categories = categoriesArray.slice();

const h2 = document.querySelector('h2');
h2.textContent = `Ok, ${user.name} - here's your tailored disaster prep plan`;

categories.forEach(category => {
    const categoryId = category.id;
    renderCategoryDiv(category, categoryId, user);
});