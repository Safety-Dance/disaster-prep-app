export function renderOption(option) {
    const label = document.createElement('label');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = option.id;
    checkbox.value = option.id;

    const span = document.createElement('span');
    span.textContent = option.description;

    label.appendChild(checkbox);
    label.appendChild(span);

    return label;
}


/// see if we can refactor into forEach loop