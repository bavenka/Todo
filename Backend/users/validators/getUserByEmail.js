import Joi from 'joi';

export default {
    params: {
        email: Joi.string().email().required(),
    },
};