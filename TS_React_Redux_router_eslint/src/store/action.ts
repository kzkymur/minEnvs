import Action, { ActionTypes } from './actionTypes';
export const IncrementAction: () => Action = () => ({
  type: ActionTypes.increment,
});
