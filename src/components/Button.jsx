import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick} {...props}>
      {props.icon ?
        <i className="material-icons">{props.icon}</i>
        :
        props.children
      }
    </button>
  );
}

Button.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  icon: '',
  className: '',
  onClick: null,
  children: null,
};

export default Button;
