import React from 'react';
import { NavLink } from 'react-router-dom';

function ToolbarLink(props) {
  return (
    <NavLink
      activeClassName="mdc-tab--active"
      {...props}
    >{props.children}</NavLink>
  );
}

export default ToolbarLink;
