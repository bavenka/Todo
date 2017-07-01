import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import CompleteAll from '../containers/completeAll'
import Footer from './footer'
import Header from "../containers/header";

const App = ({match}) => (
    <div>
        <Header/>
        <CompleteAll/>
        <VisibleTodoList filter = {match.params.filter || 'all'}/>
        <Footer/>
    </div>
);

export default App