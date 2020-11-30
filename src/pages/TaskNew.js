import React from 'react';
import './styles/TaskNew.css';
import TaskForm from '../components/TaskForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class TaskNew extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
        taskname: '',
        taskdesc: '',
        },
    };

    handleChange = e => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };

      handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
    
        try {
          await api.tasks.create(this.state.form);
          this.setState({ loading: false });
    
          this.props.history.push('/tasks');
        } catch (error) {
          this.setState({ loading: false, error: error });
        }
      };

    render() {
        if (this.state.loading) {
            return <PageLoading />;
          }
        return (
            <React.Fragment>
                  <TaskForm
                    onChange = {this.handleChange}
                    onSubmit = {this.handleSubmit}
                    formValues = {this.state.form}
                    error={this.state.error}
                  />
          </React.Fragment>
        )
    }
}

export default TaskNew;