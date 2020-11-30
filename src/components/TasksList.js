import React from 'react';
import './styles/TasksList.css';

class TasksListItem extends React.Component {
  render() {
    return (
      <div className="Tasks__contenedor">
        <span>Nombre de la tarea</span>
        <br />
        <strong>- {this.props.task.taskname}</strong>
        <br />
        <span>Descripción de la tarea</span> <br />
        <strong>- {this.props.task.taskdesc}</strong>
      </div>
    );
  }
}

class TasksList extends React.Component {
  render() {

    if (this.props.tasks.length === 0) {
      return (
        <div>
          <h3>No se encontraron tareas creadas.</h3>
          <h3>Para crear una tarea dale click al icono "+" ---></h3>
        </div>
      );
    }

    return (
      <ul className="Lista__contenedor">
        {this.props.tasks.map(task => {
          return (
            <li key={task.id}>
              <TasksListItem task={task} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TasksList;