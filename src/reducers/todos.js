import uuid from 'uuid/v4';
import {
  ADD_TODO,
  SAVE_TODO_CHANGES,
  REMOVE_TODO,
  TOGGLE_TODO,
  IS_EDIT_MODE,
  CHANGE_NEW_TASK_VALUE,
  CHANGE_OLD_TASK_VALUE,
  PUT_VALUE_INSIDE,
} from '../actions/actionCreators';
import { initialState } from './initialState';

function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            id: uuid(),
            completed: false,
            isEdit: false,
          },
        ],
      };
    case IS_EDIT_MODE:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (todo.id !== action.id) {
              todo.isEdit = false;
            }
            if (todo.id === action.id) {
              todo.isEdit = !todo.isEdit;
            }
            return todo;
          }),
        ],
      };
    case SAVE_TODO_CHANGES:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === action.id) {
              todo.text = action.text;
            }
            return todo;
          }),
        ],
      };
    case REMOVE_TODO:
      return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.id)] };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (todo.id === action.id) {
              todo.completed = !todo.completed;
            }
            return todo;
          }),
        ],
      };
    default:
      return state;
  }
}

function form(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NEW_TASK_VALUE:
      return {
        ...state,
        formValue: action.text,
      };
    case CHANGE_OLD_TASK_VALUE:
      return {
        ...state,
        newTaskValue: action.text,
      };
    case PUT_VALUE_INSIDE:
      return {
        ...state,
        newTaskValue: action.text,
      };
    default:
      return state;
  }
}

export { todos, form };
