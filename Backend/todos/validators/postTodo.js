import Joi from 'joi';

export default {
    body: {
        text: Joi.string().required(),
        completed: Joi.boolean().required(),
        user_id: Joi.string().required(),
    }
};