import {SERVER_URL} from '../constants/ActionTypes'
import checkStatusCode from './checkStatusCode'

export const saveUser = async (user) => {
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
    try {
        return {status: await checkStatusCode(response).status};
    }
    catch (e) {
        if (e instanceof Response) {
            return {status: e.status, body: e.json()};
        } else {
            throw e;
        }
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

