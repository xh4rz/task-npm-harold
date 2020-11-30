import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import logoHewtec from '../images/nicolas2.png';
import logoBruja from '../images/bruja.png';

export default class Home extends Component {
  render() {
    return (
      <div className="Card__padre">
        <div className="Card__hijo">
        
            <div className="Home__hewtec">
              <img src={logoHewtec} alt="Hewtec Logo" className="" />
              <h1>Hewtec</h1>
            </div>

            <div className="Home__name">
              <div className="Home__tittle">
              <h1>Bienvenidos <span>Soy Harold</span> </h1>
              </div>

              <Link className="Home__button" to="/tasks">
                <span>START</span>
              </Link>
            </div>

            <div className="Home__bruja">
              <img src={logoBruja} alt="Bruja Logo"/>
            </div>

        </div>
      </div>
    );
  }
}