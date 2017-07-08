const Joi = require('joi');

module.exports = {
    body: {
        id: Joi.string().required(),
        text: Joi.string(),
        completed: Joi.boolean(),
        user_id: Joi.string(),
    },
};