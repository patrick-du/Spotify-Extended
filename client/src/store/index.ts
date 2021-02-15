import createCtx from './createCtx';
import {
  CounterActionTypes,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from './types';

interface IInitialState {
  count: number;
}

const initialState: IInitialState = {
  count: 0,
};

const reducer = (state: IInitialState, action: CounterActionTypes) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        count: state.count - action.payload,
      };
    case RESET_COUNTER:
      return {
        count: initialState.count,
      };
    default:
      throw new Error();
  }
};

const [GlobalContext, Store] = createCtx(reducer, initialState);

export { Store as default, GlobalContext };
