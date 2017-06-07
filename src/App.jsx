import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
    fetch('/api/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
      .catch(err => console.error(err));
  }

  _nextId() {
    this._id = this._id || 4;

    return this._id++;
  }

  handleStatusChange(id) {
    let data = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({ todos: data });
  }

  handleDelete(id) {
    let data = this.state.todos.filter(todo => todo.id !== id);

    this.setState({ todos: data });
  }

  handleAdd(title) {
    let todo = {
      id: this._nextId(),
      title,
      completed: false,
    };

    let data = [...this.state.todos, todo];

    this.setState({ todos: data });
  }

  handleEdit(id, title) {
    let data = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.title = title;
      }

      return todo;
    });

    this.setState({ todos: data });
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />
        <section className="todo-list">
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
        </section>

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
