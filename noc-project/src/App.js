import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/global';

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
