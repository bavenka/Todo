import User from '../models/user';

export default function (id, username, email, password) {
    let newUser = {};
    if (username) {
        newUser.username = username;
    }
    if (email) {
        newUser.email = email;
    }
    if (password) {
        newUser.password = password;
    }
    return User.findByIdAndUpdate(id, newUser, {new: true}).exec();
};