import React from 'react';
import { Link } from 'react-router-dom';

class MyInfo extends React.Component {
  render() {
    return (
        <div className="TaskNew__padre">
        <div className="TaskNew__hijo">
            <form action="Form__contenedor">
                <label>Nombre</label> 
                <input type="text" value="Harold Yesid" disabled/><br/> 
                <label>Apellidos</label>
                <input type="text" value="Gonzalez Mancipe" disabled/>  <br/>
                <label>Estudios</label>
                <input type="text" value="Tecnólogo ADSI" disabled/>  <br/>   
                <label>Hobbits</label>
                <input type="text" value="Jugar VideoJuegos, Montar Bicicleta" disabled/>  <br/> 
                 <Link  to="/tasks">     
                <button>VER MIS TAREAS</button>
                </Link>
            </form>
        </div>
    </div> 
    );
  }
}

export default MyInfo;