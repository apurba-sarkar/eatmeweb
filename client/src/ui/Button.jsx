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

const Button = styled.button`
  /* animation: ${fadeIn} 2s ease-in-out; */
  padding: 0.5rem 1rem;
  /* background-color:"yellow"; */
  border: none;
  border-radius: 0.3rem;
  &:hover {
    cursor: pointer;
  }
  ${(props) =>
    props.type === "primary" &&
    css`
      background-color: ${theme.colors.primary};
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      background-color: ${theme.colors.secondary};

      /* animation: ${slideIn} 2s ease-in-out; */
    `}
`;

export { Button };
