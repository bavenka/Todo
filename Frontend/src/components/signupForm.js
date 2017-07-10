import React, {PropTypes} from 'react';
import classnames from 'classnames'
import validateInput from '../validators/validate/validateInput'
import checkUserExists from '../validators/validate/isUserExists'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {
    SUCCESS_SIGNUP_MESSAGE,
    SUCCESS_TYPE_MESSAGE,
    ERROR_SIGNUP_MESSAGE,
    ERROR_TYPE_MESSAGE
} from '../constants/ActionTypes'

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password: ''
            },
            isLoading: false,
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    async onBlur(event) {
        this.setState({errors: {}});
        const field = event.target.name;
        const value = event.target.value;
        if (value !== '') {
            const {errors, isUserExists} = await checkUserExists(field, value);
            if (isUserExists) {
                this.setState({errors})
            }
        }
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state.user);
        if (!isValid) {
            this.setState({errors})
        }
        return isValid;
    }

    onChange(event) {
        this.setState({errors: {}});
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user
        })
    }


    async onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            try {
                await this.props.createUser(this.state.user);
                this.setState({errors: {}, isLoading: true});
                this.props.addFlashMessage(SUCCESS_TYPE_MESSAGE, SUCCESS_SIGNUP_MESSAGE);
                this.props.history.push("/");
            }
            catch (e) {
                console.log(e);
                this.props.addFlashMessage(ERROR_TYPE_MESSAGE, ERROR_SIGNUP_MESSAGE);
            }
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
                           value={this.state.user.username}
                           onChange={this.onChange}
                           onBlur={this.onBlur}
                           className="form-control"/>
                    {errors.username && <span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames("form-group", {"has-error": errors.email})}>
                    <label className="control-label">Email</label>
                    <input type="email" name="email"
                           value={this.state.user.email}
                           onBlur={this.onBlur}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.email && <span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames("form-group", {"has-error": errors.password})}>
                    <label className="control-label">Password</label>
                    <input type="password" name="password"
                           value={this.state.user.password}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg" disabled={this.state.isLoading}>Submit</button>
                </div>
            </form>
        )
    }
}

SignupForm
    .propTypes = {
    history: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired,
    }).isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default withRouter (SignupForm);
