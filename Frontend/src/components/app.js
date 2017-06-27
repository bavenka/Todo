import React from 'react';
import Header from './header';
import VisibleTodoList from '../containers/VisibleTodoList';
import CompleteAll from '../containers/completeAll'
import Footer from './footer'
import TodoTextInputContainer from "../containers/todoTextInput";

const App = () => (
    <div>
        <Header/>
        <CompleteAll/>
        <TodoTextInputContainer/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default App