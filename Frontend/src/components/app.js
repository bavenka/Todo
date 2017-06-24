import React from 'react';
import Header from './header';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './footer'

const App = () => (
    <div>
        <Header/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App