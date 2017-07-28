import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import mainReducer from './reducers/mainReducer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import thunk from 'redux-thunk'
import App from './components/app';
import SignupPage from './components/signupPage'
import LoginPage from './components/loginPage'
import Content from './components/content'


const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
let store = createStore(mainReducer,
    compose(
        applyMiddleware(thunk),
        reduxDevtoolsExtension && reduxDevtoolsExtension()
    ));

render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path="/signup" component={SignupPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/:filter?" component={Content}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);