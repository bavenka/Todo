import React, {PropTypes, Component} from 'react';
import classnames from 'classnames'

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

    onSubmit(event) {
        event.preventDefault();
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value});

    }

    render() {
        const {errors, identifier, password, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Log In</h1>
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
                    <button className="btn btn-primary btn-lg" disabled={isLoading}>Submit</button>
                </div>
            </form>
        );
    }
}

export default LoginForm;
