const warn = (values) => {
    const warnings = {};
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
            warnings.password = 'Password must contain minimum 8 characters, at least one letter and one number'
        }
    return warnings
};

export default warn;