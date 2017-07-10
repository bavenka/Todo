import React, {PropTypes} from 'react';
import LoginForm from './loginForm.js'
import loginUser from '../actions/loginUser'
import {connect} from 'react-redux'

const LoginPage = ({loginUser}) => {

    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <LoginForm onLogin={loginUser}/>
            </div>
        </div>
    )
};
export default connect(null, {loginUser})(LoginPage);