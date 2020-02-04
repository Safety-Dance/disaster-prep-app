
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



//functions needed:
    //findById


