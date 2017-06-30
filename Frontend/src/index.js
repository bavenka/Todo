import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {HashRouter, Route} from 'react-router-dom'
import todoApp from './reducers/todoApp';
import App from './components/app';

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__;

let store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route path="/" component={App}/>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);