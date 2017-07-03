import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HashRouter, Route, Switch} from 'react-router-dom'
import todoApp from './reducers/todoApp';
import App from './components/app';
import SignupPage from './components/signup'
import Content from './components/content'

//НЕ УДАЛЯЙ БЛЯТЬ ЭТО!!!
//ЭТО ДЛЯ ДЭБАГА!!!
const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

let store = createStore(todoApp, reduxDevtoolsExtension && reduxDevtoolsExtension());

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