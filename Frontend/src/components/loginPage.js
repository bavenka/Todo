import React, {PropTypes} from 'react';
import LoginForm from './loginForm.js'
import {connect} from 'react-redux'
import addFlashMessage from '../actions/addFlashMessage'

const LoginPage = ({addFlashMessage}) => {

    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <LoginForm
                           addFlashMessage={addFlashMessage}/>
            </div>
        </div>
    )
};
export default connect(null, {addFlashMessage})(LoginPage);