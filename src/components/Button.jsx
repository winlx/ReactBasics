import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.className}>
      <i className="material-icons">{props.icon}</i>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  icon: '',
  className: '',
};

export default Button;
