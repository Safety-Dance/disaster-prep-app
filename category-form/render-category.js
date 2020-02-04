import { renderOption } from './render-options.js';

const form = document.querySelector('form');

export default function renderCategory(category) {
    const pTag = document.getElementById('description');
    pTag.textContent = category.overview;

    for (let i = 0; i < category.options.length; i++) {
        const option = category.option[i];
        const renderedOption = renderOption(option);
        form.appendChild(renderedOption);
    }


    const button = document.createElement('button');
    button.textContent = 'Continue';
    
    form.appendChild(button);
}
