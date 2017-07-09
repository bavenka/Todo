import Joi from 'joi';

export default {
    params: {
        userId: Joi.string().required(true),
    },
};