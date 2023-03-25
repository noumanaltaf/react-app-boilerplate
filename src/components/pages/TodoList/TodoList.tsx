import { Alert, CircularProgress, Snackbar } from '@mui/material';
import React from 'react';
import { useCreateTodo, useFetchTodo } from '../../../api/todo/todo';
import AddTodo from '../../AddTodo/AddTodo';
import Item from '../../Item';
import { useTodoContextSelector, useTodoDispatch } from './TodoList.context';
import { IState } from './TodoList.reducer';

const TodoList = () => {
  const todos = useFetchTodo();
  const createTodo = useCreateTodo();

  const todoDispatch = useTodoDispatch();
  const todoState = useTodoContextSelector((s: IState) => s.toast);

  const handleOnAdd = (text: string) => {
    createTodo.mutateAsync({
      todo: text,
      userId: 5
    })
      .then(() => todoDispatch({
        setToast: {
          open: true,
          type: 'success',
          message: 'Todo added successfully'
        }
      })).catch((err) =>
        todoDispatch({
          setToast: {
            open: true,
            type: 'error',
            message: 'Failed to add'
          }
        }));
  };

  const handleToastOnClose = () => {
    todoDispatch({ setToast: { open: false } });
  }

  return (
    <center>
      <Snackbar open={todoState?.toast?.open} autoHideDuration={5000} onClose={handleToastOnClose}>
        <Alert severity={todoState?.toast?.type} sx={{ width: '100%' }}>
          {todoState?.toast?.message}
        </Alert>
      </Snackbar>
      <AddTodo onAdd={handleOnAdd} />
      {todos.isLoading && <CircularProgress />}
      {todos.data?.todos?.map((t) => <Item key={t.id} text={t?.todo ?? ''} />)}
    </center>
  );
};

export default TodoList;