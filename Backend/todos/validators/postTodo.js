const Joi = require('joi');

module.exports = {
    body: {
        text: Joi.string().required(),
        completed: Joi.boolean().required(),
        user_id: Joi.string().required(),
    }
};