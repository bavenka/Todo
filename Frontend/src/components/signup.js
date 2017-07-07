import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import userSignup from '../actions/userSignup'
import addFlashMessage from '../actions/addFlashMessage'


import SignupForm from './signupForm.js'

const SignupPage = ({userSignup, addFlashMessage}) => {

    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <SignupForm userSignup={userSignup}
                            addFlashMessage={addFlashMessage}/>
            </div>
        </div>
    )
};

SignupPage.propTypes = {
    userSignup: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
};

export default connect(null, {userSignup, addFlashMessage})(SignupPage);