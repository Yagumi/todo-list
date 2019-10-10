import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import FormParent from '../containers/FormParent';
import Input from '../elements/Input';
import Button from '../elements/Button';

const AddNewTodo = ({ handleAddNewTodo, formValue, handleChange }) => {
  return (
    <Container>
      <h2>New Task:</h2>
      <FormParent>
        <Input value={formValue} handleChange={handleChange} />
        <Button name="Add New Task" data={formValue} handleClick={handleAddNewTodo} />
      </FormParent>
    </Container>
  );
};

const Container = styled.div`
  & > form {
    display: flex;
  }
  & > form > button {
    margin-left: auto;
  }
`;

AddNewTodo.propTypes = {
  handleAddNewTodo: PropTypes.func.isRequired,
  formValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddNewTodo;
