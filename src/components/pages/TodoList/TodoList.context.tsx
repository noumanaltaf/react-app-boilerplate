import React, { Dispatch } from 'react';
import { createContext, useContext, useContextSelector } from 'use-context-selector';
import { IActions } from './TodoLis.actions';
import reducer, { initialState, IState } from './TodoList.reducer';

export const TodoContext = createContext<IState>(initialState);
export const TodoDispatchContext = createContext<Dispatch<IActions>>(() => null);

export const useTodoDispatch = () => useContext(TodoDispatchContext);
export const useTodoState = () => useContext(TodoContext);
export const useTodoContextSelector: any = (selector: (s: IState) => any) => useContextSelector(TodoContext, selector);

interface ISalesProcessingStateProvider {
  children: React.ReactNode
}

const TodoStateProvider = ({ children }: ISalesProcessingStateProvider) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoStateProvider;