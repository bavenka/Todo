import React, {PropTypes} from 'react';
import {connect} from 'react-redux'
import addFlashMessage from '../actions/addFlashMessage'
import createUser from '../actions/createUser'

import SignupForm from './signupForm.js'

const SignupPage = ({addFlashMessage, createUser}) => {

    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <SignupForm createUser={createUser}
                    addFlashMessage={addFlashMessage}/>
            </div>
        </div>
    )
};

SignupPage.propTypes = {
    addFlashMessage: PropTypes.func.isRequired
};

export default connect(null, {addFlashMessage, createUser})(SignupPage);