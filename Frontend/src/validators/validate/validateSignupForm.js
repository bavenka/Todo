const validate = (values) => {
    let errors = {};

    const requiredFields = [
        'username',
        'email',
        'password',
    ];

    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'This field is required.'
        }
    });

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors;
};
export default validate;
