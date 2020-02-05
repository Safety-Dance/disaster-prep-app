import { renderCheckedOptionsTips } from './render-checked-options-tips.js';
import { findById } from '../common/utils.js';

export function renderCategoryDiv(category, categoryId, user) {
    const containerDiv = document.querySelector('.container');

    const newDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = category.title;
    newDiv.appendChild(h3);

    // loop through selected options and render tips content
    // renderCheckedOptionsTips();
    for (let i = 0; i < user.responses[categoryId].length; i++) {
        const userOption = user.responses[categoryId][i];

        const userOptionObject = findById(category.options, userOption);
        const label = renderCheckedOptionsTips(userOptionObject);

        newDiv.appendChild(label);
    }

    const hr = document.createElement('hr');
    newDiv.appendChild(hr);

    containerDiv.appendChild(newDiv);


}  



    // 