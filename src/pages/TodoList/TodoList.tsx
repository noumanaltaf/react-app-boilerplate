import { Alert, CircularProgress, Snackbar } from '@mui/material';
import React from 'react';
import AddTodo from '../../components/AddTodo';
import BulkActionRow from '../../components/BulkActionRow';
import Item from '../../components/Item';
import { useFetchTodo } from '../../hooks/todo/todo';
import { useTodoContextSelector, useTodoDispatch } from './TodoList.context';
import { IState } from './TodoList.reducer';
import { TodoListContainer } from './TodoList.style';
import { useQueryClient } from '@tanstack/react-query';
import { APIMethod } from '../../hooks/queryService';

const TodoList = () => {
  const todos = useFetchTodo();
  const queryClient = useQueryClient();

  const todoDispatch = useTodoDispatch();
  const toastState = useTodoContextSelector<'toast'>((s: IState) => s.toast);
  const selectedTodos = useTodoContextSelector<'selectedTodos'>((s: IState) => s.selectedTodos);

  React.useEffect(
    () => {
      queryClient.setQueryData([APIMethod.GET, 'todos'], (old: any) => {


        return {
          ...old,
          todos: [
            {
              id: 1,
              todo: 'this is example text',
              completed: false,
              userId: 12
            },
            {
              id: 2,
              todo: 'this is example text2',
              completed: false,
              userId: 12
            },
            {
              id: 3,
              todo: 'this is example text3',
              completed: false,
              userId: 12
            },
          ]
        };
      });
    },
    [queryClient]
  )
  const handleToastOnClose = React.useCallback(() => {
    todoDispatch({ setToast: { open: false } });
  },
    [todoDispatch]
  );

  const handleItemCheckedChange = React.useCallback((itemId: number, checked: boolean) => {
    const clonedSelectedTodos = [...selectedTodos];
    if (checked) {
      clonedSelectedTodos.push(itemId);
    } else {
      const selectedItemIndex = clonedSelectedTodos.findIndex((t) => t === itemId);
      if (selectedItemIndex > -1) {
        clonedSelectedTodos.splice(selectedItemIndex, 1);
      }
    }
    todoDispatch({ setSelectedTodos: clonedSelectedTodos });
  }, [selectedTodos, todoDispatch]);

  return (
    <TodoListContainer>
      <Snackbar
        open={toastState?.open}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={handleToastOnClose} >
        <Alert severity={toastState?.type} sx={{ width: '100%' }}>
          {toastState?.message}
        </Alert>
      </Snackbar>
      <AddTodo />
      <BulkActionRow selectedTodos={selectedTodos} />
      {todos.isLoading && <CircularProgress />}
      {todos.data?.todos?.map((t) => <Item
        key={t.id}
        id={t.id ?? 0}
        text={t?.todo ?? ''}
        checkedOnChange={handleItemCheckedChange} />)}
    </TodoListContainer>
  );
};

export default TodoList;