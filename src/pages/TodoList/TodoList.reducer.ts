import { createReducer } from '../../utils/helpers';
import { IActions, IToast, TodoActionsTypes } from './TodoLis.actions';

export interface IState {
  toast: IToast;
  selectedTodos: number[];
}

export const initialState: IState = {
  toast: {
    open: false,
    message: '',
    type: 'success'
  },
  selectedTodos: []
};

type IActionMap = Record<TodoActionsTypes, (state: IState, payload: any) => IState>

const actionMap: IActionMap = {
  [TodoActionsTypes.setToast]: (state: IState, payload: any): IState => ({ ...state, toast: payload }),
  [TodoActionsTypes.setSelectedTodos]: (state: IState, payload: any): IState => ({ ...state, selectedTodos: payload }),
};

export default createReducer<IActionMap, IState, IActions>(actionMap);
