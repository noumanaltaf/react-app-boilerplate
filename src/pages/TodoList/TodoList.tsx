import { Alert, CircularProgress, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import AddTodo from '../../components/AddTodo';
import BulkActionRow from '../../components/BulkActionRow';
import Item from '../../components/Item';
import { useDeleteTodo, useFetchTodo } from '../../api/todo/todo';
import { useTodoContextSelector, useTodoDispatch } from './TodoList.context';
import { IState } from './TodoList.reducer';
import { TodoListContainer } from './TodoList.style';

const TodoList = () => {
  const todos = useFetchTodo();

  const todoDispatch = useTodoDispatch();
  const toastState = useTodoContextSelector<'toast'>((s: IState) => s.toast);
  const [selectedTodosIds, setSelectedTodosIds] = useState<string[]>();
  const deleteTodo = useDeleteTodo();

  const handleToastOnClose = React.useCallback(() => {
    todoDispatch({ setToast: { open: false } });
  },
    [todoDispatch]
  );

  const handleCheckedOnChange = React.useCallback((id: string, checked: boolean) => {
    if (checked) {
      setSelectedTodosIds((prev) => [...prev ?? [], id]);
    } else {
      setSelectedTodosIds((prev) => prev?.filter((Id) => Id === id));
    }
  }, [setSelectedTodosIds]);

  const handleOnDelete = React.useCallback(async (id: string) => {
    try {
      await deleteTodo.mutateAsync({ todoId: id });
      todoDispatch({
        setToast: {
          open: true,
          type: 'success',
          message: 'Todo deleted successfully'
        }
      });
    } catch (err) {
      console.warn(err);
    }
    setSelectedTodosIds((prev) => prev?.filter((Id) => Id !== id));
    todos.refetch();
  }, [deleteTodo, todos, todoDispatch, setSelectedTodosIds]);

  const handleBulkDelete = React.useCallback(async () => {
    const bulkDeleteAPICallbacks = selectedTodosIds?.map((id) => deleteTodo.mutateAsync({ todoId: id })) as Promise<any>[];

    try {
      await Promise.all(bulkDeleteAPICallbacks);
      setSelectedTodosIds([]);
      todoDispatch({
        setToast: {
          open: true,
          type: 'success',
          message: 'Todos deleted successfully'
        }
      });
      todos.refetch();
    } catch (err) {
      console.warn(err);
    }

  }, [selectedTodosIds, todos, deleteTodo, todoDispatch, setSelectedTodosIds]);

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
      <BulkActionRow selectedRowsCount={selectedTodosIds?.length ?? 0} onBulkDelete={handleBulkDelete} />
      {todos.isFetching && <CircularProgress />}
      {todos.data?.todos?.map((t) => <Item
        key={t.id}
        id={t.id ?? '0'}
        text={t?.todo ?? ''}
        onDelete={handleOnDelete}
        checkedOnChange={handleCheckedOnChange} />)}
    </TodoListContainer>
  );
};

export default TodoList;