import { Alert, CircularProgress, Snackbar } from '@mui/material';
import React from 'react';
import AddTodo from '../../components/AddTodo';
import BulkActionRow from '../../components/BulkActionRow';
import Item from '../../components/Item';
import { useFetchTodo } from '../../hooks/todo/todo';
import { useTodoContextSelector, useTodoDispatch } from './TodoList.context';
import { IState } from './TodoList.reducer';
import { TodoListContainer } from './TodoList.style';

const TodoList = () => {
  const todos = useFetchTodo();

  const todoDispatch = useTodoDispatch();
  const todoState = useTodoContextSelector((s: IState) => s.toast);

  const handleToastOnClose = React.useCallback(() => {
    todoDispatch({ setToast: { open: false } });
  },
    [todoDispatch]
  );

  return (
    <TodoListContainer>
      <Snackbar
        open={todoState?.open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={handleToastOnClose} >
        <Alert severity={todoState?.type} sx={{ width: '100%' }}>
          {todoState?.message}
        </Alert>
      </Snackbar>
      <AddTodo />
      <BulkActionRow />
      {todos.isLoading && <CircularProgress />}
      {todos.data?.todos?.map((t) => <Item key={t.id} text={t?.todo ?? ''} />)}
    </TodoListContainer>
  );
};

export default TodoList;