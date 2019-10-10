import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

const TodoListParent = ({ todos }) => {
  return <TodoList todos={todos} />;
};
const getTodoList = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos.todos;
    case 'COMPLETED':
      return todos.todos.filter(todo => todo.completed === true);
    case 'ACTIVE':
      return todos.todos.filter(todo => todo.completed === false);
    default:
      return todos.todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getTodoList(state.todos, state.filter),
  };
};

TodoListParent.propTypes = {
  todos: PropTypes.array,
};

export default connect(
  mapStateToProps,
  null,
)(TodoListParent);
