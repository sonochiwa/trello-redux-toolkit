import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    color: #303030;
    font-family: cursive, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #252e4c;
    /* background-image: url(https://media.prod.mdn.mozit.cloud/attachments/2012/07/09/3469/6587a382ffb2c944462a6b110b079496/no-dimensions-or-ratio.svg); */
    min-height: 100vh;
    background-size: 100% 100%;
};
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 30px;
  padding: 0 8px;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: 1px solid lightgray;
`;

export const Button = styled.button`
  color: white;
  background-color: #7649bb;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 10px;
  line-height: 30px;
  height: 30px;
  border: none;
  width: 100%;
  &:hover {
    background-color: #57299c;
  };
  &:focus {
    outline: none;
  }
`;