export function renderCheckedOptionsTips(userOptionObject) {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'checkbox';
    label.appendChild(input);

    const span = document.createElement('span');
    span.textContent = userOptionObject.description;
    label.appendChild(span);

    const pTag = document.createElement('p');
    pTag.textContent = userOptionObject.tips;
    label.appendChild(pTag);

    return label;
    
}