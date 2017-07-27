import User from '../models/user';

export default function (searchParam) {
    return User.findOne(searchParam);
};