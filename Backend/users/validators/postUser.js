import Joi from 'joi';

export default {
    body: {
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    },
};