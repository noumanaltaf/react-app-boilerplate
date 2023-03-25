import React from 'react';
import { Checkbox, IconButton, Typography } from '@mui/material';
import { Actions, CardStyled } from './Item.styles';
import { IItemProps } from './Item.types';
import { ReactComponent as EditSvg } from '../../assets/svg/edit.svg';
import { ReactComponent as DeleteSvg } from '../../assets/svg/delete.svg';
import { useQueryClient } from '@tanstack/react-query';

const Item = (props: IItemProps) => {
  const { text } = props;
  const queryClient = useQueryClient();

  const handleDelete = React.useCallback(
    () => {
      queryClient.setQueryData(['GET', 'todos'], (old: any) => {
        console.log(old)
        return old;
      })
    },
    []
  )
  return (
    <CardStyled>
      <Typography>{text}</Typography>
      <Actions>
        <IconButton>
          <EditSvg />
        </IconButton>
        <IconButton>
          <DeleteSvg onClick={handleDelete} />
        </IconButton>
        <Checkbox />
      </Actions>
    </CardStyled>
  );
};

export default Item;