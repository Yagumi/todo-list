import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  toggleTodo,
  editTodo,
  removeTodo,
  saveTodoChanges,
  changeTaskValue,
  putValueInside,
} from '../actions/actionCreators';
import Todo from '../components/Todo';

const TodoParent = ({
  deleteTodo,
  isEdit,
  todo,
  completed,
  updateIsCompleted,
  editTask,
  updateTask,
  updateFormValue,
  newTaskValue,
  updateTaskValue,
}) => {
  const handleChange = event => {
    updateFormValue(event.target.value);
  };
  const handleEdit = id => {
    editTask(id);
    updateTaskValue(todo.text);
  };
  const handleDelete = id => {
    deleteTodo(id);
  };
  const handleUpdateIsCompleted = id => {
    updateIsCompleted(id);
  };

  const handleUpdateTask = id => {
    updateTask(id, newTaskValue);
    editTask(id);
  };
  return (
    <Todo
      handleDelete={handleDelete}
      text={todo.text}
      id={todo.id}
      completed={completed}
      isEdit={isEdit}
      handleEdit={handleEdit}
      handleUpdateIsCompleted={handleUpdateIsCompleted}
      handleUpdateTask={handleUpdateTask}
      handleChange={handleChange}
      newTaskValue={newTaskValue}
    />
  );
};

const getOldTaskValue = todos => {
  return todos.newTaskValue;
};

const mapStateToProps = state => {
  return {
    newTaskValue: getOldTaskValue(state.form),
  };
};

const mapDispatchToProps = {
  editTask: editTodo,
  updateIsCompleted: toggleTodo,
  deleteTodo: removeTodo,
  updateTask: saveTodoChanges,
  updateFormValue: changeTaskValue,
  updateTaskValue: putValueInside,
};

TodoParent.propTypes = {
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  completed: PropTypes.bool.isRequired,
  updateIsCompleted: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
  updateTask: PropTypes.func.isRequired,
  updateFormValue: PropTypes.func.isRequired,
  newTaskValue: PropTypes.string.isRequired,
  updateTaskValue: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoParent);
