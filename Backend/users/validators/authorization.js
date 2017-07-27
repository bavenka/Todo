import Joi from 'joi';

export default {
    body: {
        email: Joi.string().email(),
        username: Joi.string(),
        password:Joi.string().required(),
    },
};