import { combineReducers } from 'redux';
import { todos, form } from './todos';
import filter from './filter';

const todoApp = combineReducers({
  todos,
  form,
  filter,
});
export default todoApp;
