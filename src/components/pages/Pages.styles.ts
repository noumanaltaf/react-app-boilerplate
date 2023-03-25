import styled from "@emotion/styled";
import { Button, Paper } from "@mui/material";

export const NavBar = styled.div`
  background-color: #444444;
  gap: 1rem;
  padding: 1rem;
  text-align: left;
  color: white;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: bold;
  box-shadow: 0 1px 6px -1px rgba(0,0,0,.2),0 1px 4px 0 rgba(0,0,0,.14),0 1px 4px 0 rgba(0,0,0,.12)!important;
`;

export const PageContainer = styled.div`
  margin-top: 30px;
  padding:0 2rem;
`;

export const ChangeWorkSaleIdButton = styled(Button)`
  margin-bottom: 1rem;
`

export const FormColumn = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 2rem;
  gap: 1rem;
`