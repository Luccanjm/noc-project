import React from 'react';
import {Nav, Dropdown } from 'react-bootstrap';
import {Header, Main, Footer, ContainerTable, ContainerImg, ContainerGeral, Lista, LinhaLista, LinkLista} from './styles';
import logoBranco from '../../assets/logo.png';

import ExibirChamados from '../../components/mostrarChamados';
import PostChamado from '../../components/postChamado';


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
            <Lista>
                <LinhaLista><LinkLista href="#">Chamados</LinkLista></LinhaLista>
                <LinhaLista><LinkLista href="/post">Criar Chamado</LinkLista></LinhaLista>
                <LinhaLista><LinkLista href="#">Gerar Relatório</LinkLista></LinhaLista>
                <LinhaLista><LinkLista href="#">Criar Perfil Técnico</LinkLista></LinhaLista>
                <li><Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            lucca.martinelli
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Sair</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </Lista>
     
                </Nav>
        </Header>
        <Main>
            <ContainerTable>
               {/* <ExibirChamados id="ExibirChamados"></ExibirChamados> */}
               <PostChamado id="PostChamado"></PostChamado>
</ContainerTable>   
</Main>
<Footer>
    <p>&copy; Desenvolvido pelo NOC | Sumicity</p>
</Footer>
</ContainerGeral>
);
}
export default Chamados;