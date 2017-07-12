import Joi from 'joi';

export default {
    body: {
        id: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    },
};