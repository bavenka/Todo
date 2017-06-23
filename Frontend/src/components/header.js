import React, { Component } from 'react'

export default class Header extends Component {

   render() {
        return (
            <header>
                <h1>Todos</h1>
                <input placeholder="What needs to be done?"/>
            </header>
        );
    }
}
