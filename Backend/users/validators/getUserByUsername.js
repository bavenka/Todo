import Joi from 'joi';

export default {
    params: {
        username: Joi.string().required(),
    },
};