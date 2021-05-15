import ActionTypes from './actionTypes';

export const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
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
