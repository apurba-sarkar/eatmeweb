import styled, { css } from "styled-components";
import { theme } from "./../styles/theme";

const type = {
  option: css`
    height: 5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
    &:active {
      transform: scale(1.1);
      cursor: pointer;
      color: ${theme.colors.danger} !important ;
    }
  `,
  banner: css`
    height: 10rem;
    width: 50rem;
  `,
  box:css`
    padding: .5rem 0rem;
  `
};

const color = {
  primary: css`
    background-color: ${theme.colors.primary};
  `,
  secondary: css`
    background-color: ${theme.colors.secondary};
  `,
  danger: css`
    background-color: ${theme.colors.danger};
  `,
  support: css`
    background-color: ${theme.colors.support};
  `,
  none:css`
    background-color:transparent;
  `
};

const Box = styled.div`
  background-color: green;
  border-radius: 1rem;
  ${(props) => type[props.type]}
  ${(props) => color[props.color]}
`;
export { Box };
