import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #3E3B3B;
    color: #FFFFFF;
  }
  html, body, #root{
    height: 100%;
  }
 html , body , #root {
     height: 100%;
 }
 ` ;

export default GlobalStyle;