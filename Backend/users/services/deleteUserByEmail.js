import User from '../models/user';

export default function (email) {
    return User.find({email: email}).remove();
};