import React, { Component } from 'react';

import './styles/404NotFound.css';
import error404 from '../images/Monster-404-Error-pana.png';


// function NotFound() {
//   return <h1>404: Not Found</h1>;
// }

export default class NotFound extends Component {
  render() {
    return (
      <img
        src={error404}
        alt="error404"
        className="NotFound"
      />
    )
  }
}

// export default NotFound;
