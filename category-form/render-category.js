import { renderOption } from './render-option.js';

const form = document.querySelector('form');

export default function renderCategory(category, user) {
    
    const userName = document.getElementById('user-name');

    userName.textContent = `${user.name}!`;

    const categoryName = document.getElementById('category-name');

    categoryName.textContent = category.title;

    const pTag = document.getElementById('description');
    
    pTag.textContent = category.overview;
    
    for (let i = 0; i < category.options.length; i++) {
        const option = category.options[i];
        const renderedOption = renderOption(option);
        form.appendChild(renderedOption);
    }

    const button = document.createElement('button');
    button.textContent = 'Continue';
    
    form.appendChild(button);
}
