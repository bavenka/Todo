import React from 'react';
import NavigationBar from "../components/navigationBar"

const App = ({children}) => (
    <div className="container">
        <NavigationBar/>
        {children}
    </div>
);

export default App