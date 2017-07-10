import lodash from 'lodash'

function validateInput (data) {

    let errors = {};

    const emptyFieldMessage = "This field is required.";

    const map = new Map(Object.entries(data));

    for (let [key, value] of map.entries()) {
        if(lodash.isEmpty(value)) {
            errors[key] = emptyFieldMessage;
        }
    }

/*
    if (lodash.isEmpty(data.username)) {
        errors.username = emptyFieldMessage;
    }
    if (lodash.isEmpty(data.password)) {
        errors.password = emptyFieldMessage;
    }
    if (lodash.isEmpty(data.email)) {
        errors.email = emptyFieldMessage;
    }
    if (lodash.isEmpty(data.identifier) && !lodash.isUndefined(data.identifier)) {
        errors.identifier = emptyFieldMessage;
    }*/

    return {
        errors,
        isValid: lodash.isEmpty(errors)
    }
}

export default validateInput;
