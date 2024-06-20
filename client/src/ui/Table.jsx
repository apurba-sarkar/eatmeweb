import styled, { css } from "styled-components";
import { theme } from "./../styles/theme";

const size = {
  normal: css`
    height: 30rem;
  `,
  big: css`
    height: 70rem;
  `,
  special: css`
    width: 40rem;
    /* background-color: red; */
    height: 30rem;
  `,
};

const col = {
  three: css`
    grid-template-columns: 1fr 2fr 1fr;
  `,
  four: css`
    grid-template-columns: 1fr 2fr 1fr 1fr;
  `,
};

const TableBuilder = styled.div`
  /* background-color: green; */
  font-size: 1.5rem;
  ${(props) => size[props.size]};

  overflow-x: hidden;
  /* overflow: scroll; */
  &::-webkit-scrollbar {
    display: none;
    /* width:rem; */
    /* background-color:${theme.colors.primary}; */
    /* scrollbar-width:none; */
  }
  &::-webkit-scrollbar-thumb {
    background: #000000;
    /* width:10rem; Color of the scrollbar thumb on hover */
  }
`;

const TableData = styled.div`
  /* background-color: yellow; */
`;

const TableRow = styled.div`
  display: grid;
  ${(props) => col[props.col]};
  /* row-gap:10rem; */
  justify-items: center;
  padding: 1rem 0;
  border-bottom: 2px ${theme.colors.primary} solid;

  /* align-items:center;
justify-content:space-around; */
  /* width:100%; */
  /* gap:5rem; */
`;

const TableHead = styled.div`
  display: grid;
  background-color: ${theme.colors.primary};
  /* grid-template-columns: 1fr 2fr 1fr; */
  ${(props) => col[props.col]}
  /* row-gap:10rem; */
  justify-items: center;
  padding: 1rem 0;
  color: ${theme.colors.other};
  font-size: 2rem;
  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
  position: sticky;
  top: 0;
  /* z-index: 1; */
`;
export { TableBuilder, TableData, TableHead, TableRow };
