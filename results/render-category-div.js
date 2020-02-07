import { renderCheckedOptionsTips } from './render-checked-options-tips.js';
import { findById, householdMultiplier } from '../common/utils.js';

export function renderCategoryDiv(category, categoryId, user) {
    const containerDiv = document.querySelector('.container');

    const newDiv = document.createElement('div');
    newDiv.classList.add('results-div');
    newDiv.setAttribute('id', `${category.id}`);
    const icon = document.createElement('img');
    icon.src = `../assets/icons/${category.id}_red.png`;
    icon.classList.add('icon');
    newDiv.appendChild(icon);
    const h3 = document.createElement('h3');
    h3.textContent = category.title;
    newDiv.appendChild(h3);

    if (category.title === 'Water') {
        const newPTag = document.createElement('p');
        newPTag.id = 'water-id';
        newDiv.appendChild(newPTag);
        const waterNeeded = householdMultiplier(user);
        newPTag.textContent = `Based on your household size, you should plan to store ${waterNeeded} gallons of water.`;
    }

    for (let i = 0; i < user.responses[categoryId].length; i++) {
        const userOption = user.responses[categoryId][i];

        const userOptionObject = findById(category.options, userOption);
        const labelDiv = renderCheckedOptionsTips(userOptionObject);

        newDiv.appendChild(labelDiv);
    }

    containerDiv.appendChild(newDiv);
}