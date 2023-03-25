export enum TodoActionsTypes {
  setToast = 'setToast',
}

export interface IToast {
  open?: boolean;
  message?: string;
  type?: 'success' | 'error'
}

export interface IActions {
  [TodoActionsTypes.setToast]?: IToast;
}

