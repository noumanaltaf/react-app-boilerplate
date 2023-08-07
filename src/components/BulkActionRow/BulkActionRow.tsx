import React from 'react';
import { IconButton } from '@mui/material';
import { ReactComponent as DeleteSvg } from '../../assets/svg/delete.svg';
import { BulkActionRowContainer, RowText } from './BulkActionRow.style';
import { IBulkActionRowProperties } from './BulkActionRow.properties';

const BulkActionRow = (props: IBulkActionRowProperties) => {
  const { selectedRowsCount, onBulkDelete = () => undefined } = props;

  return selectedRowsCount > 0 ? (
    <BulkActionRowContainer>
      <RowText><b>{selectedRowsCount}</b> row selected</RowText>
      <IconButton onClick={onBulkDelete}>
        <DeleteSvg />
      </IconButton>
    </BulkActionRowContainer>
  ) : null;
};

export default BulkActionRow;