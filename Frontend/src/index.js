import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers/todoApp';
import App from './components/app';

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__;

let store = createStore(todoApp, REDUX_DEVTOOLS && REDUX_DEVTOOLS());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);