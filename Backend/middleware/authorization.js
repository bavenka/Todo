import jwt from 'jsonwebtoken'
import {Secret} from '../constants/index'

export default function authorize(req, res, next) {

    //TODO удалить для авторизации
   // return next();

    const token = req.get('Authorisation');

    if (token) {
        jwt.verify(token, Secret, function (err, decoded) {
            if (err) {
                return res.sendStatus(401).json({success: false, message: 'Failed to authorization token.'});
            } else {
                req.decodedToken = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
};