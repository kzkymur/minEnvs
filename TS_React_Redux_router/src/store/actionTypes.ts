import { Action } from 'redux';

export const ActionTypes = {
  increment: "INCREMENT",
  decrement: "DECREMENT",
} as const;

// Actionの型定義
interface Increment extends Action {
  type: typeof ActionTypes.increment;
}

type CounterAction = Increment;

export default CounterAction;
