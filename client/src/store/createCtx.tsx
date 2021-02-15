import * as React from 'react';
import {
  Reducer,
  Dispatch,
  PropsWithChildren,
  createContext,
  useReducer,
} from 'react';

function createCtx<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType,
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState; // we never actually use this

  const GlobalContext = createContext({
    state: initialState,
    dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
  });

  const Provider = (props: PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(
      reducer,
      initialState,
    );
    return <GlobalContext.Provider value={{ state, dispatch }} {...props} />;
  };

  return [GlobalContext, Provider] as const;
}

export default createCtx;
