import React from 'react';
import {Nav, Table,  Form, InputGroup,FormControl, Dropdown, NavItem, NavLink } from 'react-bootstrap';
import {Header, Main, Footer, ContainerTable, ContainerImg, ContainerGeral} from './styles';
import logoBranco from '../../assets/logo.png';

import ExibirChamados from '../../components/mostrarChamados';

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
               <ExibirChamados id="ExibirChamados"></ExibirChamados>
</ContainerTable>   
</Main>
<Footer>
    <p>&copy; Desenvolvido pelo NOC | Sumicity</p>
</Footer>
</ContainerGeral>
);
}
export default Chamados;