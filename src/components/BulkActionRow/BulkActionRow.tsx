import React from 'react';
import { IconButton } from '@mui/material';
import { ReactComponent as DeleteSvg } from '../../assets/svg/delete.svg';
import { BulkActionRowContainer, RowText } from './BulkActionRow.style';
import { IBulkActionRowProperties } from './BulkActionRow.properties';
import { useQueryClient } from '@tanstack/react-query';
import { APIMethod } from '../../api/queryService';
import { ITodo } from '../../api/todo/todo';
import { useTodoDispatch } from '../../pages/TodoList/TodoList.context';

const BulkActionRow = (props: IBulkActionRowProperties) => {
  const { selectedTodos } = props;

  const todoDispatch = useTodoDispatch();

  const queryClient = useQueryClient();

  const handleBluckDelete = React.useCallback(() => {
    queryClient.setQueryData([APIMethod.GET, 'todos'], (old: any) => {
      const updatedTodos = old?.todos?.filter((t: ITodo) => !selectedTodos.some((ct) => Number(ct) === t.id));

      return {
        ...old,
        todos: updatedTodos
      };
    });
    todoDispatch({ setSelectedTodos: [] });
  }, [todoDispatch, queryClient, selectedTodos]);

  return selectedTodos?.length > 0 ? (
    <BulkActionRowContainer>
      <RowText><b>{selectedTodos?.length}</b> row selected</RowText>
      <IconButton onClick={handleBluckDelete}>
        <DeleteSvg />
      </IconButton>
    </BulkActionRowContainer>
  ) : null;
};

export default BulkActionRow;