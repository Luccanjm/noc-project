import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './styles/global';
import {Nav} from 'react-bootstrap';
function App() {
  return (
<>
<Nav variant="pills" defaultActiveKey="/home">
  <Nav.Item>
    <h1>Noc Sumicity</h1>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      -
    </Nav.Link>
  </Nav.Item>
</Nav>

<BrowserRouter>
<Routes />

</BrowserRouter>
<GlobalStyles />
</>
  );
}

export default App;
