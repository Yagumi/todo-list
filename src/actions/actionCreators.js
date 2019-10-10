export const ADD_TODO = 'ADD_TODO';
export const IS_EDIT_MODE = 'IS_EDIT_MODE';
export const SAVE_TODO_CHANGES = 'SAVE_TODO_CHANGES';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CHANGE_NEW_TASK_VALUE = 'CHANGE_NEW_TASK_VALUE';
export const CHANGE_OLD_TASK_VALUE = 'CHANGE_OLD_TASK_VALUE';
export const PUT_VALUE_INSIDE = 'PUT_VALUE_INSIDE';
export const VIEW_FILTRED_LIST = 'VIEW_FILTRED_LIST';

export function viewFiltredList(filter) {
  return {
    type: VIEW_FILTRED_LIST,
    filter,
  };
}
export function putValueInside(text) {
  return {
    type: PUT_VALUE_INSIDE,
    text,
  };
}

export function changeTaskValue(text) {
  return {
    type: CHANGE_OLD_TASK_VALUE,
    text,
  };
}
export function changeFormValue(text) {
  return {
    type: CHANGE_NEW_TASK_VALUE,
    text,
  };
}

export function addTodo(text, id) {
  return {
    type: ADD_TODO,
    text,
    id,
  };
}
export function editTodo(id) {
  return {
    type: IS_EDIT_MODE,
    id,
  };
}
export function saveTodoChanges(id, text) {
  return {
    type: SAVE_TODO_CHANGES,
    id,
    text,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
