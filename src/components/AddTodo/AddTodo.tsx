import { Button } from '@mui/material';
import React, { useState } from 'react';
import { CardStyled, InputStyled } from './AddTodo.styles';
import { DefaultValues, IAddTodo } from './AddTodo.types';


const AddTodo = (props: IAddTodo) => {
  const { onAdd = DefaultValues.onAdd } = props;
  const [text, setText] = useState<string>('');

  return (
    <CardStyled>
      <InputStyled placeholder="Enter todo item..." inputProps={{ 'aria-label': 'todo' }} onChange={(e) => setText(e.target.value)} />
      <Button color="secondary" aria-label="add an alarm" onClick={() => onAdd(text)}>
        Add
      </Button>
    </CardStyled>
  );
};

export default AddTodo;