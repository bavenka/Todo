import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';

import Footer from './footer'
import Header from "../containers/header";

const App = ({match}) => (
    <div>
        <Header/>

        <VisibleTodoList filter = {match.params.filter || 'all'}/>
        <Footer/>
    </div>
);

export default App