import jwt from 'jsonwebtoken'
import {Secret} from '../constants/index'

export default function authorize(req, res, next) {

    //TODO удалить для авторизации
    return next();

    // check header or url parameters or post parameters for token
    const token = req.body.token || req.param('token');

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, Secret, function (err, decoded) {
            if (err) {
                return res.json({success: false, message: 'Failed to authorization token.'});
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
};