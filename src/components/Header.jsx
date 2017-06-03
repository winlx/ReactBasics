import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

function Header(props) {
  return (
    <header>
      <Stats todos={props.todos} />
      <h1>{props.title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default Header;
