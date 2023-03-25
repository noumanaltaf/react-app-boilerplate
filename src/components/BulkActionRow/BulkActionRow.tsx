import React from 'react';
import { IconButton } from '@mui/material';
import { ReactComponent as DeleteSvg } from '../../assets/svg/delete.svg';
import { BulkActionRowContainer, RowText } from './BulkActionRow.style';

const BulkActionRow = () => {
  return (
    <BulkActionRowContainer>
      <RowText><b>1</b> row selected</RowText>
      <IconButton>
        <DeleteSvg />
      </IconButton>
    </BulkActionRowContainer>
  );
};

export default BulkActionRow;