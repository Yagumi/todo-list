import { VIEW_FILTRED_LIST } from '../actions/actionCreators';

function filter(state = 'ALL', action) {
  switch (action.type) {
    case VIEW_FILTRED_LIST:
      return action.filter;
    default:
      return state;
  }
}

export default filter;
