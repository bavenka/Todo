import jwt from 'jsonwebtoken'
import {Secret} from '../constants/index'
import unless from 'express-unless'

function Authorize(req, res, next) {

    const token = req.get('Authorization');

    if (token) {
        jwt.verify(token, Secret, function (err, decoded) {
            if (err) {
                return res.status(401).json({success: false, message: 'Failed to authorization token.'});
            } else {
                req.decodedToken = decoded;
                next();
            }
        });
    } else {
        console.error('No token provided.');
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}

Authorize.unless = unless;

export default Authorize