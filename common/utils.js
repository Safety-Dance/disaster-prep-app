
export function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        description: formData.get(''),
        options: formData.get(''),
        completed: {}
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


