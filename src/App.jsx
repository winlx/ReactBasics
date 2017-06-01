import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

import todos from './todos';

function App(props) {
  return (
    <main>
      <Header title={props.title} />
      <section className="todo-list">
        {props.todos.map(todo =>
          <Todo key={todo.id} title={todo.title} completed={todo.completed} />)}
      </section>
    </main>
  );
}

App.propTypes = {
  title: PropTypes.string,
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

App.defaultProps = {
  title: 'Todo list',
};

ReactDOM.render(<App todos={todos} />, document.getElementById('root'));
