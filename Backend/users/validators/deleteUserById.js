import Joi from 'joi';

export default {
    params: {
        id: Joi.string().required(),
    },
};