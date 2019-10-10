import React from 'react';
import PropTypes from 'prop-types';

import Form from '../components/Form';

const FormParent = ({ children, ...props }) => {
  return <Form {...props}>{children}</Form>;
};

FormParent.propTypes = {
  children: PropTypes.any,
};

export default FormParent;
