import React, {PropTypes} from 'react';
import LoginForm from './loginForm.js'

const LoginPage = ({login}) => {

    return (
        <div className="row">
            <div className="col-md-4 col-md-offset-4">
                <LoginForm onLogin={login}/>
            </div>
        </div>
    )
};
export default LoginPage;