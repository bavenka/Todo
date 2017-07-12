import User from '../models/user';

export default function (id) {
    return User.findById(id);
};