import React from 'react';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './footer'
import Header from "../containers/header";
import NavigationBar from "../components/navigationBar"

const App = () => (
    <div>
        <NavigationBar/>
        <Header/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App