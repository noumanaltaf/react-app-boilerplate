import React from 'react';
import { Checkbox, IconButton, Typography } from '@mui/material';
import { Actions, CardStyled } from './Item.styles';
import { IItemProps } from './Item.types';
import EditSvg from '../../assets/svg/edit.svg';

const EditIcon = () => (<img src={EditSvg} alt='' />);

const Item = (props: IItemProps) => {
  const { text } = props;

  return (
    <CardStyled>
      <Typography>{text}</Typography>
      <Actions>
        <IconButton>
          <EditIcon />
        </IconButton>
        <Checkbox />
      </Actions>
    </CardStyled>
  );
};

export default Item;