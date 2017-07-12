import jwt from 'jsonwebtoken'

class Auth {

    static authenticateUser(token) {
        localStorage.setItem('token', token);
    }

    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('token');
    }

    static getUserToken() {
        return localStorage.getItem('token');
    }

    static decodeToken(token) {
        return jwt.decode(token);
    }
}
export default Auth;


