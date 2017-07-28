const validate = (values) => {
    let errors = {};

    const emptyFieldMessage = "This field is required.";

    if (!values.username) {
        errors.username = emptyFieldMessage;
    }
        if (!values.email) {
            errors.email = emptyFieldMessage
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (!values.password) {
            errors.password = emptyFieldMessage
        }
    return errors;
};
export default validate;
