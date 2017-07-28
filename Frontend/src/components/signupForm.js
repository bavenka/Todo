import React, {PropTypes} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form'
import classnames from 'classnames'
import validate from '../validators/validate/validateSignupForm'
import warn from '../validators/validate/warnSignupForm'
import {withRouter} from 'react-router-dom'
import * as userApi from '../api/userApi'

import {
    SUCCESS_SIGNUP_MESSAGE,
    SUCCESS_TYPE_MESSAGE,
    ERROR_SIGNUP_MESSAGE,
    ERROR_TYPE_MESSAGE
} from '../constants/ActionTypes'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) =>
    <div className={classnames("form-group", {"has-error":touched && error},{'has-warning': touched && warning})}>
        <label className="control-label">
            {label}
        </label>
        <div>
            <input className="form-control"{...input} type={type} />
            {touched &&
            ((error &&
            <span className="help-block">
          {error}
        </span>)||
            (warning &&
            <span className="help-block">
              {warning}
            </span>))}
        </div>
    </div>;

class SignupForm extends React.Component {

    constructor(props) {
        super(props);
    }


   /* static validate(values) {
        const {error,warning, hasError,hasWarnings} = validateInput(values);
        if (hasError) {
            throw new SubmissionError(error);
        }
        if(hasWarnings) {
            throw SubmissionWarning
        }
    }*/

   /* conflictCauseDetermination(body) {
        let cause = null;
        if (body.errmsg.includes('username')) {
            cause = 'username';
        }
        if (body.errmsg.includes('email')) {
            cause = 'email';
        }
        return cause;
    }*/

 /*   validateEmailAndUsernameOnUniqueness(data) {
        let errors = {};
        switch (data) {
            case 'username' :
                errors.username = 'There is user with such username.';
                this.setState({errors});
                break;
            case 'email':
                errors.email = 'There is user with such email.';
                this.setState({errors});
                break;
            default:
                throw new Error;
        }
    }*/


    /*async onSubmit(event) {
        event.preventDefault();
        if (this.isValid()) {
            try {
                const response = await userApi.saveUser(this.state.user);
                this.setState({errors: {}, isLoading: true});
                this.props.addFlashMessage(SUCCESS_TYPE_MESSAGE, SUCCESS_SIGNUP_MESSAGE);
                this.props.history.push("/");
            }
            catch (e) {
                if (e instanceof Response) {
                    let body = await e.json();
                    if (e.status === 409) {
                        const cause = this.conflictCauseDetermination(body);
                        this.validateEmailAndUsernameOnUniqueness(cause);
                        return;
                    }
                    else {
                        this.props.addFlashMessage(ERROR_TYPE_MESSAGE, 'Message: ' + JSON.stringify(body.errors) + '. '
                            + 'Status Code: ' + body.status + '.');
                        return;
                    }
                }
                this.props.addFlashMessage(ERROR_TYPE_MESSAGE, 'Message: ' + e.message + '.');
            }
        }
    }*/



   async submit(values) {
       try {
           const response = await userApi.saveUser(values);
           this.props.addFlashMessage(SUCCESS_TYPE_MESSAGE, SUCCESS_SIGNUP_MESSAGE);
           this.props.history.push("/");
       }
       catch (e) {
           if (e instanceof Response) {
               let body = await e.json();
               if (e.status === 409) {
                   return
               }
               else {
                   this.props.addFlashMessage(ERROR_TYPE_MESSAGE, 'Message: ' + JSON.stringify(body.errors) + '. '
                       + 'Status Code: ' + body.status + '.');
                   return;
               }
           }
           this.props.addFlashMessage(ERROR_TYPE_MESSAGE, 'Message: ' + e.message + '.');
       }
   }

    render() {
        const {handleSubmit, pristine, submitting} = this.props;
        console.log(pristine);
        return (
            <form onSubmit={handleSubmit(this.submit)}>
                <h1>Sign Up</h1>
                    <Field type="text" name="username" label="Username" component={renderField} />
                    <Field type="email" name="email" label="Email" component={renderField} />
                    <Field type="password" name="password" label="Password" component={renderField}/>
                    <button type="submit" className="btn btn-primary btn-lg" disabled={pristine}>Submit
                    </button>
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

SignupForm = reduxForm({
    form: 'signup',
    validate,
    warn
})(SignupForm);

export default withRouter(SignupForm);

