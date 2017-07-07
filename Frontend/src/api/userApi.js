import {SERVER_URL} from '../constants/ActionTypes'

export const saveUser = async (user) => {
    return await fetch(SERVER_URL + '/user', {
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
};