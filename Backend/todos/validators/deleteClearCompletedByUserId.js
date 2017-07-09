import Joi from 'joi';

export default {
    params: {
        user_id: Joi.string().required(),
    }
};