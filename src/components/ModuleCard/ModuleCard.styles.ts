import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

export const StyledCard = styled(Card)`
  width: 200px;
  height: 200px;
  background-color: #fff;
`

export const StyledCardActionArea = styled(CardActionArea)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`