import { createGlobalStyle } from 'styled-components';

import githubExplorerBackground from '../assets/github-explorer.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubExplorerBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`;