
import { getUser } from '../common/utils.js';
import { renderCategoryDiv } from './render-category-div.js';

const user = getUser();

const h2 = document.querySelector('h2');
h2.textContent = `Ok, ${user.name} - here's your tailored disaster prep plan`;

//render user's selections and append to the appropriate div

// user.responses.firstAid.forEach(choice => {
//   console.log(choice);
// });


    //use findById function to get the user's selected options
    
    //forEach selected option, render the text of description and tips

        //create checkbox inputs for each description
            //set textContent
            //append to label
        //create a label to hold the tips
            //set textContent
            //append to div

    //add an event listener on click for the print/pdf button
        //create a pdf function (print.js)


    // note: save user's checked off list?

    //reference: results page from choose your own adventure