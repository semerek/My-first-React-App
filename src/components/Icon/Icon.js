import React from 'react';
import propTypes from 'prop-types';


const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  icon: propTypes.node,
  name: propTypes.node,
};
export default Icon;
