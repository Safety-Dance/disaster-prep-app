//Category Page Algorithm

// import functions
import { categoriesArray } from '../data/data.js';
import { getUser, saveUser } from '../common/utils.js';
import renderCategory from './render-category.js';

/////////////////////
//TEMPORARY findById function
/////////////////////
function findById(someArray, someId) {
    for (let index = 0; index < someArray.length; index++) {
        const item = someArray[index];
        if (item.id === someId) {
            return item;
        }
    }
    return null;
}
/////////////////////////////

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

    const formData = new FormData(form);

    console.log(selectedOptions);

    // if else statement that goes through each and sets get on that input's namegit

    // saveUser(user);

    // window.location = './category-form/index.html?id=water';
});

//add event listener to form
    //use new FormData to get new instance of form data
        // .get(formData), must use name attribute
        //push only the selected option ids into the responses key as an array within the user object
         //stringify and set/save user object to local storage (function utils.js)

    //on submit, move to the next category
        //get current query params
        //match to index number of array
        //increment the index
        //use new index number to generate new query param on window location 
        //if all questions are complete, move to window.location results page

        //note: try using indexOf() or maybe use slice if worried about mutation

