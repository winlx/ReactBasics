import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.input.focus();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let title = this.input.value;

    this.props.onEdit(this.props.id, title);

    this.setState({ editing: false });
  }

  renderDisplay() {
    return (
      <div className={`todo${this.props.completed ? ' completed' : ''}`}>
        <Checkbox
          checked={this.props.completed}
          onChange={() => this.props.onStatusChange(this.props.id)}
        />

        <span className="todo-title">{this.props.title}</span>

        <Button
          className="edit icon"
          icon="edit"
          onClick={() => this.setState({ editing: true })}
        />

        <Button
          className="delete icon"
          icon="delete"
          onClick={() => this.props.onDelete(this.props.id)}
        />
      </div>
    );
  }

  renderForm() {
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={(input) => { this.input = input; }}
          defaultValue={this.props.title}
        />
        <Button
          className="save icon"
          icon="save"
          type="submit"
        />
      </form>
    );
  }

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Todo;
