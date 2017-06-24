import React from 'react';
import Header from './header';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
    <div>
        <Header/>
        <VisibleTodoList/>
    </div>
);

export default App