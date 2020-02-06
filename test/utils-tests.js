// IMPORT MODULES under test here:
import { findById, makeUser, saveUser, getUser, householdMultiplier } from '../common/utils.js';
import { categoriesArray } from '../data/data.js';

const test = QUnit.test;

test('Find By Id', function(assert) {
 
    const id = 'water';
    const expected = categoriesArray[0];
    
    const result = findById(categoriesArray, id);
   
    assert.equal(result, expected);
});

test('Make User', function(assert) {

    const formData = new FormData();
    formData.set('name', 'Safety First');
    formData.set('email', 'hello@gmail.com');
    formData.set('number-household-members', '3');
  
    const expected = {
        name: 'Safety First',
        email: 'hello@gmail.com',
        numberHouseholdMembers: '3',
        responses: {
            water: [],
            food: [],
            shelter: [],
            communication: [],
            firstaid: [],
            electricity: [],
            sanitation: [],
        },
        progress: 0,
    };
   
    const result = makeUser(formData);

    assert.deepEqual(result, expected);
});

test('Save User', function(assert) {
    //Arrange

    // Set up your parameters and expectations
    const user = 1;
    saveUser(user);
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = 1;
    const result = getUser();
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});



test('multiplier', function(assert) {
    
    let user = {name: 'name', numberHouseholdMembers: '1'};
   
    const expected = 3;
    const result = householdMultiplier(user);
   
    assert.equal(result, expected);
});
