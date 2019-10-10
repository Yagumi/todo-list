import uuid from 'uuid/v4';
// eslint-disable-next-line import/prefer-default-export
export const initialState = {
  formValue: '',
  newTaskValue: '',

  todos: [
    {
      text: 'Test 1',
      id: uuid(),
      completed: true,
      isEdit: false,
    },
    {
      text: 'Test 2',
      id: uuid(),
      completed: false,
      isEdit: false,
    },
  ],
};
