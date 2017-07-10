import User from '../models/user';

export default function (username, email, password) {
    let newUser = new User(
        {
            username: username,
            email: email,
            password: password
        });
    return newUser.save();
};