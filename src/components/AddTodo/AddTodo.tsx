import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useCreateTodo, useFetchTodo } from '../../api/todo/todo';
import { useTodoDispatch } from '../../pages/TodoList/TodoList.context';
import { CardStyled, InputStyled } from './AddTodo.styles';

const AddTodo = () => {
  const inputRef = React.useRef<HTMLInputElement>();

  const [text, setText] = useState<string>('');
  const createTodo = useCreateTodo();
  const todoDispatch = useTodoDispatch();
  const fetchTodos = useFetchTodo();

  const handleOnAdd = React.useCallback(
    () => {
      createTodo.mutateAsync({
        todo: text,
      })
        .then(() => {
          todoDispatch({
            setToast: {
              open: true,
              type: 'success',
              message: 'Todo added successfully'
            }
          });

          fetchTodos.refetch();

          if (inputRef.current) {
            inputRef.current.value = '';
          }

        }).catch((err) =>
          todoDispatch({
            setToast: {
              open: true,
              type: 'error',
              message: 'Failed to add'
            }
          }));
    },
    [text, createTodo, fetchTodos, todoDispatch]
  );

  const inputOnChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const inputOnKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleOnAdd();
    }
  }, [handleOnAdd]);

  return (
    <CardStyled>
      <InputStyled
        inputRef={inputRef}
        placeholder="Enter todo item..."
        inputProps={{ 'aria-label': 'todo' }}
        onChange={inputOnChange}
        onKeyDown={inputOnKeyDown} />
      <Button color="secondary" aria-label="add an alarm" onClick={() => handleOnAdd()}>
        Add
      </Button>
    </CardStyled>
  );
};

export default AddTodo;