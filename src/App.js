import React from 'react';
import styled from '@emotion/styled';
import AddNewTodoParent from './containers/AddNewTodoParent';
import FilterParent from './containers/FilterParent';
import TodoListParent from './containers/TodoListParent';

const App = () => {
  return (
    <Container>
      <h1>Simple Todo List</h1>
      <AddNewTodoParent />
      <FilterParent />
      <TodoListParent />
    </Container>
  );
};

const Container = styled.div`
  width: 375px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
`;

export default App;
