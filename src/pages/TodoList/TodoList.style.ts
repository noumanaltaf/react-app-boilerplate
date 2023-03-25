import styled from "@emotion/styled";
import theme from "../../theme";

export const TodoListContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;

  ${theme.breakpoints.up('desktop')}{
    width: 50%;
  }
`