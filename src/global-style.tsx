import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    color: #303030;
    background-color: #252e4c;
    font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  };
`;

export const Input = styled.input`
  box-sizing: border-box;
  height: 30px;
  width: 100%;
  padding: 0 8px;
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