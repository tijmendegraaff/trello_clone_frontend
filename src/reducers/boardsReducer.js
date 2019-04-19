import { FETCH_BOARDS } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_BOARDS:
      return action.payload || [];
    default:
      return state;
  }
}
