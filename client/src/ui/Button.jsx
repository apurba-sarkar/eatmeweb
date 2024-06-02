import styled, { css } from "styled-components";
import { theme } from "./../styles/theme";

const Button = styled.button`
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${theme.colors.primary};
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: ${theme.colors.secondary};
    `}
`;

export { Button };
