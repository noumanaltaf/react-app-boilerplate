import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useCreateTodo } from '../../hooks/todo/todo';
import { useTodoDispatch } from '../../pages/TodoList/TodoList.context';
import { CardStyled, InputStyled } from './AddTodo.styles';

const AddTodo = () => {
  const [text, setText] = useState<string>('');
  const createTodo = useCreateTodo();
  const todoDispatch = useTodoDispatch();

  const handleOnAdd = React.useCallback(
    () => {
      createTodo.mutateAsync({
        todo: text,
        userId: 5
      })
        .then(() => {
          todoDispatch({
            setToast: {
              open: true,
              type: 'success',
              message: 'Todo added successfully'
            }
          });

        }).catch((err) =>
          todoDispatch({
            setToast: {
              open: true,
              type: 'error',
              message: 'Failed to add'
            }
          }));
    },
    [text, createTodo, todoDispatch]
  );

  return (
    <CardStyled>
      <InputStyled placeholder="Enter todo item..." inputProps={{ 'aria-label': 'todo' }} onChange={(e) => setText(e.target.value)} />
      <Button color="secondary" aria-label="add an alarm" onClick={() => handleOnAdd()}>
        Add
      </Button>
    </CardStyled>
  );
};

export default AddTodo;