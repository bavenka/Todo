import {SERVER_URL} from '../constants/ActionTypes'
import checkStatusCode from './checkStatusCode'

export const saveUser = async (user) => {
    try {
        let response = await fetch(SERVER_URL + '/user', {
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
        return await checkStatusCode(response);
    }
    catch (e) {
        throw e;
    }
};

export const getToken = async (identifier, password) => {
    try {
        let response = await fetch(SERVER_URL + '/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier: identifier,
                password: password
            })
        });
        response = await checkStatusCode(response);
        return await response.json().get('token');
    }
    catch (e) {
        throw e;
    }
};


/*export const getUserByEmail = async (email) => {

 const response = await fetch(SERVER_URL + '/user/email/' + email);
 /!* if (response.status !== 200) {
 throw new Error('Looks like there was a problem. Status Code: ' +
 response.status);
 }*!/
 if (response.headers.get('content-type')) {
 return await response.json();
 }
 // else

 return {};
 };*/

/*export const getUserByUsername = async (username) => {

 const response = await fetch(SERVER_URL + '/user/username/' + username);
 if (response.status !== 200) {
 throw new Error('Looks like there was a problem. Status Code: ' +
 response.status);
 }
 if (response.headers.get('content-type')) {
 return await response.json();
 }

 return {};
 };*/

