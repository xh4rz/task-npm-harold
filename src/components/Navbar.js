import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Navbar.css'
import logoHewtec from '../images/nicolas2.png'
import brujaHewtec from '../images/bruja.png'

class Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar__padre">
            <div className="Navbar__hijo">

                <div className="Navbar__hewtec">
                <Link  to="/">
                <img className="" src={logoHewtec} alt="Logo" />
                </Link>
                <h1>Hewtec</h1>
                </div>

                <div className="Navbar__bruja">
                <Link  to="/MyInfo">
                <img className="Logo__bruja" src={brujaHewtec} alt="Logo" />
                </Link>
                </div>

            </div>
          </div>
        )
    }
}

export default Navbar;