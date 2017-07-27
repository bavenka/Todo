import jwt from 'jsonwebtoken'
import authorization from '../services/authorization';
import {Secret} from '../../constants/index'

export default function (req, res, next) {
    const email = req.body.email;
    const username = req.body.username;
    const searchParam = email ? {email} : username ? {username} : null;

    authorization(searchParam).then(user => {
        if (!user) {
            res.status(404).json({success: false, message: 'Authentication failed. User not found.'});
        } else if (user) {
            if (user.password !== req.body.password) {
                res.status(409).json({success: false, message: 'Authentication failed. Wrong password.'});
            } else {

                const pureUser = {
                    username: user.username,
                    email: user.email,
                    id: user._id
                };

                const token = jwt.sign(pureUser, Secret, {
                    expiresIn: 86400 // expires in 24 hours
                });

                res.status(200).json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }
        }
    }).catch(err => {
        throw  err;
    });
};