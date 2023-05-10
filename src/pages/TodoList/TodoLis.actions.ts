import { IState } from "./TodoList.reducer";

export enum TodoActionsTypes {
  setToast = 'setToast',
  setSelectedTodos = 'setSelectedTodos',
}

export interface IToast {
  open?: boolean;
  message?: string;
  type?: 'success' | 'error'
}

export interface IActions {
  [TodoActionsTypes.setToast]?: IState['toast'];
  [TodoActionsTypes.setSelectedTodos]?: IState['selectedTodos'];
}

