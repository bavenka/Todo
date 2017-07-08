const Joi = require('joi');

module.exports = {
    params: {
        user_id: Joi.string().required(),
    },
};