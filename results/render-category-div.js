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
    const overview = document.createElement('p');
    overview.setAttribute('id', 'overview');
    overview.textContent = category.overview;
    newDiv.appendChild(overview);

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

    ////// New Notetaking Functionality
    const notesDiv = document.createElement('div');
    notesDiv.id = 'notes-div';

    const separator = document.createElement('hr');

    const notesSectionTitle = document.createElement('p');
    notesSectionTitle.textContent = 'Personal Notes & Reminders';
    notesSectionTitle.style.fontWeight = 700;

    const notesList = document.createElement('ul');

    const notesForm = document.createElement('form');

    const textArea = document.createElement('textarea');
    textArea.setAttribute('rows', 2);
    textArea.setAttribute('cols', 75);
    textArea.setAttribute('name', 'note');

    const submitNote = document.createElement('button');
    submitNote.textContent = 'Add note';
    submitNote.classList.add('submit-note');

    notesForm.append(textArea, submitNote);
    notesDiv.append(separator, notesSectionTitle, notesList, notesForm);
    newDiv.append(notesDiv);

    containerDiv.appendChild(newDiv);


    notesForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(notesForm);
        const noteData = formData.get('note');
        const textArea = document.querySelector('textarea');

        createNote(noteData, notesList);
        textArea.value = '';
    });
}


function createNote(noteData, notesList) {
    const noteItem = document.createElement('li');
    noteItem.textContent = noteData;
    notesList.appendChild(noteItem);
}
