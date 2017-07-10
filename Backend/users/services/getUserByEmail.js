import User from '../models/user';

export default function (email) {
    return User.findOne({email: email});
};