import styled, { css, keyframes } from "styled-components";
import { theme } from "./../styles/theme";

const fadeIn = keyframes`
     from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const size = {
  l: css`
    padding: 2rem 3rem;
    font-size: 2rem;
    font-weight: bold;
  `,
  m: css`
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    /* width:20rem; */
  `,
  s: css`
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
  `,
  other: css`
    font-size: 2rem;
    font-weight: bold;
  `,
};
const varient = {
  primary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.other};
  `,
  secondary: css`
    color: ${theme.colors.primary};
    background-color: ${theme.colors.other};
  `,
  register: css`
    color: ${theme.colors.primary};
    background-color: transparent;
    text-decoration: underline;
    border: none;
  `,
  danger: css`
    color: ${theme.colors.danger};
  `,
  disabled: css`
    color: black;
    background-color: ${theme.colors.disabled};
  `,

  none: css`
    background-color: transparent;
    border: none;
    color: ${theme.colors.primary};
    font-size: 1.5rem;
  `,
};

const Button = styled.button`
  animation: ${fadeIn} 2s ease-in-out;
  padding: 0.5rem 1rem;
  border: solid 2px ${theme.colors.primary};
  /* background-color:"yellow"; */
  border-radius: 0.3rem;
  &:hover {
    cursor: pointer;
  }

  &:active {
    color: ${theme.colors.secondary};
  }
  ${(props) => varient[props.varient]}
  ${(props) => size[props.size]}
`;

export { Button };
