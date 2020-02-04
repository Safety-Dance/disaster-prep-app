import { renderOption } from './render-options.js';

const form = document.querySelector('form');

export default function renderCategory(category) {
    // put category description text in p tag
    const pTag = document.getElementById('description');
    pTag.textContent = category.overview;

    // for each category option, create a label tag with the option description text, append a checkbox input to the label, and append the label to the form
    for (let i = 0; i < category.options.length; i++) {
        const option = category.option[i];
        const renderedOption = renderOption(option);
        form.appendChild(renderedOption);
    }

    const button = document.createElement('button');
    button.textContent = 'Continue';
    
    form.appendChild(button);
}
