
export function renderCategoryDiv() {
    const containerDiv = document.querySelector('.container');

    const newDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = category.title;
    newDiv.appendChild(h3);
    
}  

function x() {
    
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    label.appendChild(input);
    const span = document.createElement('span');
    span.textContent = category.options[];
    label.appendChild(span);
    const pTag = document.createElement('p');
    pTag.textContent = category.options[]
    
}


    newDiv.appendChild(label);

    // 