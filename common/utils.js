
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

//functions needed:
    //findById


