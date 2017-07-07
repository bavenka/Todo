import React from 'react';
import NavigationBar from "../components/navigationBar"
import FlashMessagesList from '../components/flashMessagesList'

const App = ({children}) => (
    <div className="container">
        <NavigationBar/>
        <FlashMessagesList/>
        {children}
    </div>
);

export default App