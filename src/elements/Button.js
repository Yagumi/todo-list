import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, name, data, handleClick, ...props }) => {
  return (
    <button type="button" onClick={() => handleClick(data)} {...props}>
      {name}
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
