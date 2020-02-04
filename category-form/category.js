//Category Page Algorithm

//Get the user from local storage (function, utils.js)

//Get search params to reference id for displaying metadata
    //make a findById function (utils.js?)

//forEach of the category options
    //render textContent to <p> variable name.overview 
    //render labels and checkbox inputs with ids, value, and name
    //render the options and append to the inputs

//add event listener to form
    //use new FormData to get new instance of form data
        // .get(formData), must use name attribute
        //push into user object
         //stringify and set/save user object to local storage (function utils.js)

    //on submit, move to the next category
        //get current query params
        //match to index number of array
        //increment the index
        //use new index number to generate new query param on window location 
        //if all questions are complete, move to window.location results page

        //note: try using indexOf() or maybe use slice if worried about mutation

