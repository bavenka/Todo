import React from 'react'
import Header from '../containers/header'
import VisibleTodoList from '../containers/visibleTodoList'
import Footer from '../components/footer'

const Content = () => (
    <div className="container">
        <Header/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);

export default Content