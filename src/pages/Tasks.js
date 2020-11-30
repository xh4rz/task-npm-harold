import React from "react";
import { Link } from 'react-router-dom';
import "./styles/Tasks.css";
import TasksList from '../components/TasksList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api'

class Tasks extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.tasks.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {

    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Tasks__padre">
          <div className="Tasks__hijo">

          <TasksList tasks={this.state.data} />
          
            <div className="Icono__contenedor">
            <Link className="Icono" to="/tasks/new"> 
            <h1>+</h1>
              </Link>
            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Tasks;