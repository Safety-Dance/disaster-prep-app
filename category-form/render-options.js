export default function renderOption(option) {
    const label = document.createElement('label');
    label.textContent = option.overview;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = option.id;
    checkbox.value = option.id;

    label.appendChild(checkbox);

    return label;
}


/// see if we can refactor into forEach loop