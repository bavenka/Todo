import User from '../models/user';

export default function (id, username, email, password) {
    return User.findById(id, function (err, user) {
        if (err)
            throw err;
        user.username = username;
        user.email = email;
        user.password = password;
        return user.save();
    });
};