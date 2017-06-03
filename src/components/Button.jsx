import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      <i className="material-icons">{props.icon}</i>
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  icon: '',
  className: '',
  onClick: null,
};

export default Button;
