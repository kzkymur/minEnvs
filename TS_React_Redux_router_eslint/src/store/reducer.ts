import { Action } from 'redux';
import { ActionTypes } from './actionTypes';

export type State = {
  count: number;
}

export const initialState: State = {
  count: 0,
};

const reducer = (state = initialState, action: Action) => {
  console.log(action);
  switch (action.type) {
    case ActionTypes.increment: {
      state = {
        ...state,
        count: state.count + 1,
      }
      break;
    }
    case ActionTypes.decrement: {
      state = {
        ...state,
        count: state.count - 1,
      }
      break;
    }
  }
  return { ...state, }
}
export default reducer;
