export function renderCheckedOptionsTips(userOptionObject) {
    const labelDiv = document.createElement('div');
    labelDiv.classList.add('category-choice-div');
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.type = 'checkbox';
    label.appendChild(input);

    const span = document.createElement('span');
    span.textContent = userOptionObject.description;
    label.appendChild(span);

    const pTag = document.createElement('p');
    pTag.textContent = userOptionObject.tips;
    if (userOptionObject.id === 'communicationOne') {    
        const aTag = document.createElement('a');
        aTag.href = 'https://www.portlandoregon.gov/pbem/article/483656';
        aTag.textContent = 'You can find your nearest BEECN site by entering your zipcode on their website.';
        pTag.appendChild(aTag);
    }

    label.appendChild(pTag);

    labelDiv.appendChild(label);

    return labelDiv; 
}