import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import addFlashMessage from '../actions/addFlashMessage'

import SignupForm from './signupForm.js'

const SignupPage = ({addFlashMessage}) => {

    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <SignupForm
                    addFlashMessage={addFlashMessage}/>
            </div>
        </div>
    )
};

SignupPage.propTypes = {
    addFlashMessage: PropTypes.func.isRequired
};

export default connect(null, {addFlashMessage})(SignupPage);