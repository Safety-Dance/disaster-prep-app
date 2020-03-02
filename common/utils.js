const responseFields = [
    'water',
    'food',
    'shelter',
    'communication',
    'firstaid',
    'electricity',
    'sanitation'
];

export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        numberHouseholdMembers: formData.get('number-household-members'),
        responses: {},
        progress: 0,
    };

    // this will make it easier for devs to add more response fields in the future, or even to move these fields to a database so that these fields can eventually be truly dynamic
    responseFields.forEach(key => { user.responses[key] = []; });


    return user;
}

export function getUser() {
    const stringyUser = localStorage.getItem('user');
    if (!stringyUser) return null;
    const user = JSON.parse(stringyUser);
    return user;
}

export function saveUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem('user', stringyUser);
}

export function findById(array, id) {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function householdMultiplier(user) {
    const householdMembers = Number(user.numberHouseholdMembers);
    // nice naming inside the function! however, from the outside, i don't know whaat `householdMultiplier` does. maybe `calculateWater` would be easier to read?
    const waterNeeded = (householdMembers * 3);
    return waterNeeded;
}