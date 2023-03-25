import { createReducer } from '../../../utils/helpers';
import { IActions, IToast, TodoActionsTypes } from './TodoLis.actions';

export interface IState {
  toast: IToast;
}

export const initialState: IState = {
  toast: {
    open: false,
    message: '',
    type: 'success'
  }
};

type IActionMap = Record<TodoActionsTypes, (state: IState, payload: any) => IState>

const actionMap: IActionMap = {
  [TodoActionsTypes.setToast]: (state: IState, payload: any) => ({ ...state, openToast: payload }),
};

export default createReducer<IActionMap, IState, IActions>(actionMap);
