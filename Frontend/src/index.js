import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {HashRouter, Route, Switch} from 'react-router-dom'
import thunk from 'redux-thunk'
import todoApp from './reducers/todoApp';
import App from './components/app';
import SignupPage from './components/signup'
import Content from './components/content'

let store = createStore(todoApp, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <HashRouter>
            <App>
                <Switch>
                    <Route path="/signup" component={SignupPage}/>
                    <Route path="/:filter?" component={Content}/>
                </Switch>
            </App>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);