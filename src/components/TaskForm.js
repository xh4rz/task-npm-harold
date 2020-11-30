import React from 'react';

class TaskForm extends React.Component {
    handleClick = e => {
        console.log('Botón ha sido presionado');
    };

render() {
    return (
        <div className="TaskNew__padre">
        <div className="TaskNew__hijo">
            <form onSubmit={this.props.onSubmit} className="Form__contenedor">
                <label>Nombre Tarea</label>

                <input
                onChange = {this.props.onChange}
                type="text"
                name="taskname"
                value={this.props.formValues.taskname}
                maxLength="40"
                required
                 />
                 
                <br/>

                <label>Descripción de tarea</label>

                <input
                onChange = {this.props.onChange}
                type="text"
                name="taskdesc"
                value={this.props.formValues.taskdesc}
                maxLength="40"
                required
                />
                <br/> 

                <button onClick={this.handleClick} >GUARDAR TAREA</button>

                    {this.props.error && (
                    <p className="text-danger">{this.props.error.message}</p>
                     )}
            </form>
        </div>
    </div>
    );
  }
}

export default TaskForm;