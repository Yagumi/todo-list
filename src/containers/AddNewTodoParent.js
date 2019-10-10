import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, changeFormValue } from '../actions/actionCreators';
import AddNewTodo from '../components/AddNewTodo';

const AddNewTodoParent = ({ addNewTodo, formValue, updateFormValue }) => {
  const handleChange = event => {
    updateFormValue(event.target.value);
  };
  const handleAddNewTodo = () => {
    addNewTodo(formValue);
  };
  return (
    <AddNewTodo
      handleAddNewTodo={handleAddNewTodo}
      formValue={formValue}
      handleChange={handleChange}
    />
  );
};

const getFormValue = todos => {
  return todos.formValue;
};

const mapStateToProps = state => {
  return {
    formValue: getFormValue(state.form),
  };
};

const mapDispatchToProps = {
  addNewTodo: addTodo,
  updateFormValue: changeFormValue,
};

AddNewTodoParent.propTypes = {
  addNewTodo: PropTypes.func.isRequired,
  formValue: PropTypes.string.isRequired,
  updateFormValue: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewTodoParent);
