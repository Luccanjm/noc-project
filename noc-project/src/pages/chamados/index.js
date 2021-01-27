import React from 'react';
import {Nav, Table, Form, InputGroup,FormControl, Dropdown, NavItem, NavLink } from 'react-bootstrap';
import {Header, Main, Footer, ContainerTable, ContainerImg, ContainerGeral} from './styles';
import logoBranco from '../../assets/logo.png';

// import Nav from './styles';
const Chamados = () =>{
    <>
    </>

        return(
        <ContainerGeral>
            <Header>
                <Nav variant="pills" defaultActiveKey="/home">
                <ContainerImg>
                    <img src={logoBranco} alt></img>
                </ContainerImg>
            <ul>
                <li>Chamados</li>
                <li>Criar Chamado</li>
                <li>Gerar Relatório</li>
                <li>Criar Perfil Técnico</li>
                <li><Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            lucca.martinelli
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Sair</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
     
                </Nav>
        </Header>
        <Main>
            <ContainerTable>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Número Chamado</th>
                        <th>Status Chamado</th>
                        <th>Técnico</th>
                        <th>Sistema</th>
                        <th>Requerente</th>
                        <th>Valor Boleto</th>

                        </tr>
                    </thead>
  <tbody>
   <tr>
      <td> 
    
    <FormControl className="numero" aria-label="Chamado)" />
    
  </td>
      <td><Form.Group controlId="Select1">
    <Form.Control className="status" as="select" >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </td>
  <td>
  <Form.Group controlId="Select2">
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </td>
  <td>
  <Form.Group controlId="Select3">
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </td>
      <td> <FormControl aria-label="Amount (to the nearest dollar)" /></td>
      <td> <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>R$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest real)" />
    <InputGroup.Append>
      <InputGroup.Text>,00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup></td>

    </tr> 
    <tr>
      <td>54548</td>
      <td>Solucionado</td>
      <td>isabella.couto</td>
      <td>NOC/WPP</td>
      <td>joão.renato</td>
      <td>10</td>

    </tr>
    <tr>
      <td>54888</td>
      <td>Solucionado</td>
      <td>bruno.barros</td>
      <td>SYDLE</td>
      <td>gabriel.will</td>
      <td>50</td>
    </tr>
    <tr>
      <td>54888</td>
      <td>Solucionado</td>
      <td>bruno.barros</td>
      <td>SYDLE</td>
      <td>gabriel.will</td>
      <td>50</td>
    </tr>
      <tr>
      <td>54888</td>
      <td>Solucionado</td>
      <td>bruno.barros</td>
      <td>SYDLE</td>
      <td>gabriel.will</td>
      <td>50</td>
    </tr>
  </tbody>
</Table>     
</ContainerTable>   
</Main>
<Footer>
    <p>&copy; Desenvolvido pelo NOC | Sumicity</p>
</Footer>
</ContainerGeral>
);
}
export default Chamados;