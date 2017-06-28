import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import CompleteAll from '../containers/completeAll'
import Footer from './footer'
import Header from "../containers/header";

const App = () => (
    <div>
        <Header/>
        <CompleteAll/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App