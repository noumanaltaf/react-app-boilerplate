import React from 'react';
import { Checkbox, IconButton, Typography } from '@mui/material';
import { Actions, CardStyled } from './Item.styles';
import { IItemProps } from './Item.types';
import { ReactComponent as EditSvg } from '../../assets/svg/edit.svg';
import { ReactComponent as DeleteSvg } from '../../assets/svg/delete.svg';
import { useQueryClient } from '@tanstack/react-query';
import { APIMethod } from '../../hooks/queryService';
import { ITodo } from '../../hooks/todo/todo';
import { useTodoDispatch } from '../../pages/TodoList/TodoList.context';

const Item = (props: IItemProps) => {
  const { id, text, checkedOnChange = () => undefined } = props;
  const queryClient = useQueryClient();
  const todoDispatch = useTodoDispatch();

  const handleDelete = React.useCallback(
    () => {
      checkedOnChange(id, false); // to remove deleted item from selected list;

      queryClient.setQueryData([APIMethod.GET, 'todos'], (old: any) => {
        const updatedTodos = old?.todos?.filter((t: ITodo) => t.id !== id);

        return {
          ...old,
          todos: updatedTodos
        };
      });

    },
    [id, checkedOnChange, queryClient]
  )
  return (
    <CardStyled>
      <Typography>{text}</Typography>
      <Actions>
        <IconButton>
          <EditSvg />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteSvg />
        </IconButton>
        <Checkbox onChange={(e) => checkedOnChange(id, Boolean(e.target.checked))} />
      </Actions>
    </CardStyled>
  );
};

export default Item;