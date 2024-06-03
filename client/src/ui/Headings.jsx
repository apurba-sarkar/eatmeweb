import styled, { css } from "styled-components";
import { theme } from "./../styles/theme";

const Headings = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 4rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 400;
    `}
  ${(props) =>
    props.type === "nav" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
`;

export { Headings };
