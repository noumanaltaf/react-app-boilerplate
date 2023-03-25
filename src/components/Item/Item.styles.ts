import styled from "@emotion/styled";
import { ButtonGroup, Card } from "@mui/material";

export const CardStyled = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 1rem;
  padding: 1rem;
`

export const Actions = styled(ButtonGroup)`
  display: flex;
  gap: 1rem;
`