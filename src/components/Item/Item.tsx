import React from 'react';
import { Checkbox, IconButton, Typography } from '@mui/material';
import { Actions, CardStyled } from './Item.styles';
import { IItemProps } from './Item.types';
import { ReactComponent as DeleteSvg } from '../../assets/svg/delete.svg';

const Item = (props: IItemProps) => {
  const { id, text, onDelete = () => undefined, checkedOnChange = () => undefined } = props;

  return (
    <CardStyled>
      <Typography>{text}</Typography>
      <Actions>
        <IconButton onClick={()=> onDelete(id)}>
          <DeleteSvg />
        </IconButton>
        <Checkbox onChange={(e) => checkedOnChange(id, Boolean(e.target.checked))} />
      </Actions>
    </CardStyled>
  );
};

export default Item;