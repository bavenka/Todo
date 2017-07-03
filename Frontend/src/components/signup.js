import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import userSignup from '../actions/userSignup'

import SignupForm from './signupForm.js'

const SignupPage = ({userSignup}) => {

    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <SignupForm userSignup={userSignup}/>
            </div>
        </div>
    )
};

SignupPage.propTypes = {
    userSignup: PropTypes.func.isRequired
};

export default connect(null, {userSignup})(SignupPage);