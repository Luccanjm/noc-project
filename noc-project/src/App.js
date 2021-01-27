import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
<>
<h1> SISTEMA NOC | SUMICITY</h1>
<BrowserRouter>
<Routes />
</BrowserRouter>
</>
  );
}

export default App;
