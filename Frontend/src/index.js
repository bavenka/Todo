import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HashRouter, Route} from 'react-router-dom'
import todoApp from './reducers/todoApp';
import App from './components/app';

let store = createStore(todoApp);

render(
    <Provider store={store}>
        <HashRouter>
                <Route path="/:filter?" component={App}/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);