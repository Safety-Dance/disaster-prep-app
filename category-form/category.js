//Category Page Algorithm

// import functions
import { categoriesArray } from '../data/data.js';
import { getUser, saveUser, findById } from '../common/utils.js';
import renderCategory from './render-category.js';

const categories = categoriesArray.slice();
const user = getUser();

/// Get DOM elements
const form = document.querySelector('form');

const searchParams = new URLSearchParams(window.location.search);
const categoryId = searchParams.get('id');

const category = findById(categories, categoryId);

renderCategory(category);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedInputs = document.querySelectorAll('input:checked');

    selectedInputs.forEach((input) => {
        user.responses[categoryId].push(input.name);

    });
    saveUser(user);

    let currentIndex = categories.indexOf(category);
    console.log(currentIndex);
    const nextIndex = currentIndex + 1;
    console.log(nextIndex);
    const nextCategory = categories[nextIndex];
    console.log(nextCategory);
    const nextCategoryId = nextCategory.id;
    console.log(nextCategoryId);

    window.location = `./index.html?id=${nextCategoryId}`;
    
});
   
    //on submit, move to the next category
        //get current query params
        //match to index number of array
        //increment the index
        //use new index number to generate new query param on window location 
        //if all questions are complete, move to window.location results page

        //note: try using indexOf() 

