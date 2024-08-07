import styled, { css } from "styled-components";
import { theme } from "./../styles/theme";

const type = {
  master: css`
    font-size: 8rem;
    font-weight: 600;
  `,
  h1: css`
    font-size: 4rem;
    font-weight: 600;
    text-transform: uppercase;
  `,
  h2: css`
    font-size: 3rem;
    font-weight: 600;
  `,
  nav: css`
    font-size: 2rem;
    font-weight: 600;
  `,
  label: css`
    font-size: 1.5rem;
    align-self: flex-start;
  `,
  side: css`
    font-size: 1rem;
    font-style: italic;
  `,
};

const colorvar = {
  primary: css`
    color: ${theme.colors.primary};
  `,
  secondary: css`
    color: ${theme.colors.secondary};
  `,
  other: css`
    color: ${theme.colors.other};
  `,
  danger: css`
    color: ${theme.colors.danger};
  `,
 
};

const Headings = styled.h1`
  ${(props) => type[props.type]}
  ${(props) => colorvar[props.colorvar]}
`;

export { Headings };
