import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/global';
<link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,300;1,400&display=swap" rel="stylesheet"></link>

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
