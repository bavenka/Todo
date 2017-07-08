const Joi = require('joi');

module.exports = {
    params: {
        userId: Joi.string().required(true),
    },
};