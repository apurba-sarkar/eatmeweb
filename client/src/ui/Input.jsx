import styled, { css } from "styled-components";
import { theme } from "./../styles/theme";

const varient = {
   input:css`
        height:3rem;
    `,
    area:css`
        height:12rem;
    `
}

const Input = styled.input`
  background-color: ${theme.colors.secondary};
  border: none;
  padding:.5rem 1rem;
  width:40rem;
  ${(props)=>varient[props.varient]}
  &:focus {
    outline: none;
    border:.2rem ${theme.colors.primary} solid
    /* background-color:red */
  }
`;
const InputArea = styled.textarea`
  background-color: ${theme.colors.secondary};
  border: none;
  height:10rem;
  padding:.5rem 1rem;
  width:40rem;
  resize:none;
  &:focus {
    outline: none;
    border:.2rem ${theme.colors.primary} solid
    /* background-color:red */
  }
`;
export { Input,InputArea };
