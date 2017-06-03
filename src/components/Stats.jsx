import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
  let total = props.todos.length;
  let done = props.todos.filter(todo => todo.completed).length;
  let remain = total - done;

  return (
    <table>
      <tbody>
        <tr>
          <th>Total tasks:</th>
          <td>{total}</td>
        </tr>
        <tr>
          <th>Done:</th>
          <td>{done}</td>
        </tr>
        <tr>
          <th>Remain:</th>
          <td>{remain}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Stats;
