
export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        email: formData.get('email'),
        numberHouseholdMemebers: formData.get('number-household-members'),
        responses: {
            water: [],
            food: [],
            shelter: [],
            communication: [],
            firstAid: [],
            electricity: [],
            sanitation: [],
        }
    };
    return user;
}

export function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

export function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
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

//functions needed:


