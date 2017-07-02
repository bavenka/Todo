import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './footer'
import Header from "../containers/header";

const App = () => (
    <div>
        <Header/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App