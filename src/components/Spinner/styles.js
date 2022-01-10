import styled, { injectGlobal } from "styled-components";

export const Wrapper = styled.View`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 0 50%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
   ${props =>
    props.offset &&
    `
         margin-left: -${props.offset}px;
    `};
`;
