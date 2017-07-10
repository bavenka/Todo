import User from '../models/user';

export default function () {
    return User.find();
};

