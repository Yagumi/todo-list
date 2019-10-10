import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import TodoParent from '../containers/TodoParent';

const TodoList = ({ todos }) => {
  return (
    <Container>
      <h2>Tasks:</h2>
      {todos.map(todo => (
        <TodoParent key={todo.id} todo={todo} completed={todo.completed} isEdit={todo.isEdit} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  padding: 0;
`;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default TodoList;
