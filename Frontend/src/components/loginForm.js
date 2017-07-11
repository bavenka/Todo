import React, {PropTypes, Component} from 'react';
import classnames from 'classnames'
import validateInput from '../validators/validate/validateInput'
import {ERROR_TYPE_MESSAGE, BAD_CREDENTIALS} from '../constants/ActionTypes'
import * as userApi from '../api/userApi'
import {withRouter} from 'react-router-dom'
import Auth from '../utils/auth'

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            const {identifier, password} = this.state;
            try {
                const jwt = await userApi.getToken(identifier, password);
                Auth.authenticateUser(jwt);
                this.setState({errors: {}, isLoading: true});
                this.props.history.push("/");
            }
            catch (e) {
                if (e instanceof Response) {
                    let body = await e.json();
                    if (e.status === 404 || e.status === 409) {
                        const errors = {};
                        errors.form = BAD_CREDENTIALS;
                        this.setState({errors});
                        return;
                    } else {
                        this.props.addFlashMessage(ERROR_TYPE_MESSAGE, 'Message: ' + JSON.stringify(body.errors) + '. '
                            + 'Status Code: ' + body.status + '.');
                        return;
                    }
                }
                this.props.addFlashMessage(ERROR_TYPE_MESSAGE, 'Name: ' + e.name + '. Message: ' + e.message + '.');
            }
        }
    }

    isValid() {
        const data = {
            identifier: this.state.identifier,
            password: this.state.password
        };
        const {errors, isValid} = validateInput(data);
        if (!isValid) {
            this.setState({errors})
        }
        return isValid;
    }

    onChange(event) {
        this.setState({errors: {}});
        this.setState({[event.target.name]: event.target.value});
    }


    render() {
        const {errors, identifier, password, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Log In</h1>
                {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                <div className={classnames("form-group", {"has-error": errors.identifier})}>
                    <label className="control-label">Username or email</label>
                    <input type="text" name="identifier"
                           value={identifier}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.identifier && <span className="help-block">{errors.identifier}</span>}
                </div>
                <div className={classnames("form-group", {"has-error": errors.password})}>
                    <label className="control-label">Password</label>
                    <input type="password" name="password"
                           value={password}
                           onChange={this.onChange}
                           className="form-control"/>
                    {errors.password && <span className="help-block">{errors.password}</span>}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
        );
    }
}

export default withRouter(LoginForm);
