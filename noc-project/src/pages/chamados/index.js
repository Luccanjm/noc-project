import React from 'react';
import {Nav, Dropdown} from 'react-bootstrap';
import {Header, Main, ContainerImg, ContainerGeral, Lista, LinhaLista, LinkLista,Button} from './styles';
import logoBranco from '../../assets/logo.png';

import ExibirChamados from '../../components/mostrarChamados';
import PostChamado from '../../components/postChamado';
import Footer from '../../components/footer';


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
            <LinhaLista><Button><LinkLista href="#">Chamados</LinkLista></Button></LinhaLista>
                <LinhaLista><Button><LinkLista href="/post">Criar Chamado</LinkLista></Button></LinhaLista>
                <LinhaLista><Button><LinkLista href="#">Gerar Relatório</LinkLista></Button></LinhaLista>
                <LinhaLista><Button><LinkLista href="#">Criar Perfil Técnico</LinkLista></Button></LinhaLista>
                <LinhaLista id="dropdownlista"><Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                            lucca.martinelli
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Sair</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                </LinhaLista>
            </Lista>
     
                </Nav>
        </Header>
        <Main>
               {/* <ExibirChamados id="ExibirChamados"></ExibirChamados> */}
               <PostChamado id="PostChamado"></PostChamado>
</Main>
<Footer id="footer"></Footer>
    
</ContainerGeral>
);
}
export default Chamados;