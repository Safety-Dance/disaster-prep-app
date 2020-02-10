import { renderOption } from './render-option.js';
import { householdMultiplier } from '../common/utils.js';

export default function renderCategory(category, user) {
    
    const greeting = document.getElementById('greeting');
    const userName = document.getElementById('user-name');
    userName.textContent = `${user.name}!`;

    // hide greeting after first category page
    if (category.title !== 'Water') greeting.classList.add('hidden');

    const categoryName = document.getElementById('category-name');
    categoryName.textContent = category.title;
    const categoryIcon = document.getElementById('category-icon');
    categoryIcon.src = category.image;
    const form = document.querySelector('form');
    const pTag = document.getElementById('description');
    pTag.textContent = category.overview;

    if (category.title === 'Water') {
        const householdPTag = document.createElement('p');
        form.appendChild(householdPTag);
        const waterNeeded = householdMultiplier(user);
        householdPTag.textContent = ` Based on your household size, you should plan to store ${waterNeeded} gallons of water.`;
    }

    category.options.forEach(option => {
        const renderedOption = renderOption(option);
        form.appendChild(renderedOption);
    });

    const button = document.createElement('button');
    button.textContent = 'Continue';
    form.appendChild(button);
}
