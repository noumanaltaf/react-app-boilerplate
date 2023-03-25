import React from 'react';
import { ICarfProperties } from './ModuleCard.types';
import { StyledCard, StyledCardActionArea } from './ModuleCard.styles';
import Typography from '@mui/material/Typography';

const ModuleCard = ({ name, Icon, onClick }: ICarfProperties) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledCardActionArea>
        {Icon}
        <Typography>
          {name}
        </Typography>
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default React.memo(ModuleCard);