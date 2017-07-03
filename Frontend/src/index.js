import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HashRouter, BrowserRouter, Route} from 'react-router-dom'
import todoApp from './reducers/todoApp';
import App from './components/app';
import SignUp from './containers/SignUpPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route exact={true} path="/" component={App}/>
                    <Route exact={true} path="/signup" component={SignUp}/>
                </div>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);