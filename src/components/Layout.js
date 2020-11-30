import React from 'react';
import Navbar from './Navbar';

function Layout(props) {
    return(
        // <h1>Bienvenido soy Harold</h1>
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout;