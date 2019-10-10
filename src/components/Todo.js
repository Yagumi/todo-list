import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import FormParent from '../containers/FormParent';
import Input from '../elements/Input';
import Button from '../elements/Button';

const Todo = ({
  text,
  id,
  completed,
  isEdit,
  handleEdit,
  handleDelete,
  handleUpdateIsCompleted,
  handleUpdateTask,
  newTaskValue,
  handleChange,
}) => {
  if (isEdit) {
    return (
      <Container>
        <FormParent>
          <Input value={newTaskValue} handleChange={handleChange} />
          <Button name="Save" data={id} handleClick={handleUpdateTask} />
          <Button name="Go Back" data={id} handleClick={handleEdit} />
        </FormParent>
      </Container>
    );
  }
  return (
    <Container>
      <Title completed={completed} onClick={() => handleUpdateIsCompleted(id)}>
        {text}
      </Title>
      <Button name="Edit" data={id} handleClick={handleEdit} />
      <Button name="Delete" data={id} handleClick={handleDelete} />
    </Container>
  );
};
const Container = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  & > button {
    cursor: pointer;
  }
  & > button:first-of-type {
    margin-left: auto;
    margin-right: 20px;
  }
`;
const Title = styled.h1`
  cursor: pointer;
  color: ${({ completed }) => {
    if (completed) {
      return 'grey';
    }
    return 'black';
  }};
  text-decoration: ${({ completed }) => {
    if (completed) {
      return 'line-through';
    }
    return 'none';
  }};
`;

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  isEdit: PropTypes.bool.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdateIsCompleted: PropTypes.func.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  newTaskValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Todo;
