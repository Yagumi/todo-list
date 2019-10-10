import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ changeValue, handleChange, ...props }) => {
  return <input type="text" value={changeValue} onChange={handleChange} {...props} />;
};

Input.propTypes = {
  changeValue: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Input;
