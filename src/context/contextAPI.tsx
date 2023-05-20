import { createContext, useReducer } from 'react';

type CounterState = {
  counterCount: number;
};

type PayloadAction = {
  type: 'increaseByAmount';
  payload: number;
};

type NoPayloadAction = {
  type: 'increaseCount' | 'decreaseCount' | 'clearCount';
};

type CounterAction = PayloadAction | NoPayloadAction;

const initialState: CounterState = {
  counterCount: 0,
};

export const CounterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increaseCount':
      return { counterCount: state.counterCount + 1 };
    case 'decreaseCount':
      return { counterCount: state.counterCount - 1 };
    case 'increaseByAmount':
      return { counterCount: state.counterCount + action.payload };
    case 'clearCount':
      return initialState;
    default:
      return state;
  }
};

// dispatch({type: "increment", payload: 10})

type CounterContextProviderProps = {
  children: React.ReactNode;
};

type CounterContextType = {
  state: CounterState;
  dispatch: React.Dispatch<CounterAction>;
};
export const CounterContext = createContext<CounterContextType>({
  state: initialState,
  dispatch: () => null,
});

export const CounterContextProvider = ({
  children,
}: CounterContextProviderProps) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  //   const value = { state, dispatch };

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
