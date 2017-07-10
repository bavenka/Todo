import User from '../models/user';

export default function (username) {
    return User.findOne({username: username});
};