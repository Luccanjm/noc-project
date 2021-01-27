import React from 'react';
import {Nav, Table, Container, Row, Col, Image, FormControl} from 'react-bootstrap';
import {ContainerNav, ContainerTable, ContainerImg} from './styles';
import logoBranco from '../../assets/logo.png';

// import Nav from './styles';
const Chamados = () =>{
    <>
    </>
        return(
            <>         
<Container>
  <Row>
    <Col xs={6} md={4}>
    </Col>
    </Row>
    </Container>
            <ContainerNav>
            <Nav variant="pills" defaultActiveKey="/home">
            <ContainerImg>
            <img src={logoBranco} alt></img>
      </ContainerImg>
  <Nav.Item>
    
    <Nav.Link href="/home">Criar chamado</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Gerar relatório</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Deletar Chamado
    </Nav.Link>
  </Nav.Item>
</Nav>
</ContainerNav>

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
      <td>151540</td>
      <td>Pendente</td>
      <td>lucca.martinelli</td>
      <td>AIR</td>
      <td>luana.silva</td>
      <td>20</td>

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
  </tbody>
</Table>     
</ContainerTable>   
</>
);
}
export default Chamados;