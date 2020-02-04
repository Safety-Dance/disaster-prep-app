// IMPORT MODULES under test here:
import { findById, makeUser, saveUser, getUser } from '../common/utils.js';
import { categories } from '../data/data.js';

const test = QUnit.test;

test('Find By Id', function (assert) {
    //Arrange

    // Set up your parameters and expectations
    const id = 'water';
    const expected = categories[0];
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(categories, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('Make User', function (assert) {
    //Arrange
    const formData = new FormData();
    formData.set('name', 'Magnum Opus');
    // Set up your parameters and expectations
    const expected = {
        name: 'Magnum Opus',
        description: null,
        options: null,
        completed: {}
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});

test('Save User', function (assert) {
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