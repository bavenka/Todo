import {SERVER_URL} from '../constants/ActionTypes'

export const saveUser = async (user) => {
    const response = await fetch(SERVER_URL + '/user', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            username: user.username,
        })
    });
    if (response.status !== 201) {
        throw new Error('Looks like there was a problem. Status Code: ' +
            response.status);
    }
    return response;
};

export const getUserByEmail = async (email) => {

    const response = await fetch(SERVER_URL + '/user/email/' + email, {
        method: 'GET',
    });
    if (response.status !== 200) {
        throw new Error('Looks like there was a problem. Status Code: ' +
            response.status);
    }
    return await response.json();
};

