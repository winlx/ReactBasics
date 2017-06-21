import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { CSSTransitionGroup } from 'react-transition-group';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/todos')
      .then(response => this.setState({ todos: response.data }))
      .catch(this.handleError);
  }

  handleStatusChange(id) {
    axios.patch(`/api/todos/${id}`)
      .then((response) => {
        let data = this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo = response.data;
          }

          return todo;
        });

        this.setState({ todos: data });
      })
      .catch(this.handleError);
  }

  handleDelete(id) {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        let data = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos: data });
      })
      .catch(this.handleError);
  }

  handleAdd(title) {
    axios.post('/api/todos', { title })
      .then((response) => {
        let data = [...this.state.todos, response.data];

        this.setState({ todos: data });
      })
      .catch(this.handleError);
  }

  handleEdit(id, title) {
    axios.put(`/api/todos/${id}`, { title })
      .then((response) => {
        let data = this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo = response.data;
          }

          return todo;
        });

        this.setState({ todos: data });
      })
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />
        <CSSTransitionGroup
          className="todo-list"
          component="section"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onStatusChange={this.handleStatusChange}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />))}
        </CSSTransitionGroup>

        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: 'Todo list',
};

ReactDOM.render(<App />, document.getElementById('root'));
