
export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        numberHouseholdMembers: formData.get('number-household-members'),
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
    const waterNeeded = (householdMembers * 3);
    return waterNeeded;
}