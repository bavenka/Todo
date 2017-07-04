import React, {PropTypes} from 'react';
import classnames from 'classnames'
import validateInput from '../validators/validate/validateInput'

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            isLoading: false,
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if(!isValid) {
            this.setState({errors})
        }
        return isValid;
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
           // this.props.userSignup(this.state);
        }
    }

    render() {

        const {errors} = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <h1>Sign Up</h1>
                <div className={classnames("form-group", {"has-error": errors.username})}>
                    <label className="control-label">Username</label>
                    <input type="text" name="username"
                           value={this.state.username}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames("form-group", {"has-error": errors.email})}>
                    <label className="control-label">Email</label>
                    <input type="email" name="email"
                           value={this.state.email}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames("form-group", {"has-error": errors.password})}>
                    <label className="control-label">Password</label>
                    <input type="password" name="password"
                           value={this.state.password}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>
                <div className={classnames("form-group", {"has-error": errors.passwordConfirmation})}>
                    <label className="control-label">Password Confirmation</label>
                    <input type="password" name="passwordConfirmation"
                           value={this.state.passwordConfirmation}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
        )
    }
}

SignupForm.propTypes = {
    userSignup: PropTypes.func.isRequired
};

export default SignupForm;
