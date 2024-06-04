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
  `,
  h2: css`
    font-size: 3rem;
    font-weight: 400;
  `,
  nav: css`
    font-size: 2rem;
    font-weight: 600;
  `,
  

};


const colorvar = {
  primary: css`
    color: ${theme.colors.primary};
  `,
  secondary: css`
    color: ${theme.colors.secondary};
  `,
};
    
const Headings = styled.h1`
  ${(props) => type[props.type]}
  ${(props) => colorvar[props.colorvar]}
`;

export { Headings };
