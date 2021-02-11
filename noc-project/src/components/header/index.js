import React from 'react';
import {Head, LinhaLista, LinkLista, Lista, Button, ContainerImg} from './styles';
import {Nav} from 'react-bootstrap';
import logoBranco from '../../assets/logo.png';
import logoNoc from '../../assets/logo2.png';


const Header = () =>{


    return(
        <Head>
            <Nav variant="pills" defaultActiveKey="/home">
                <ContainerImg>
                    <img src={logoBranco}></img>
                </ContainerImg>
                <Lista>
                    <LinhaLista><Button className="buttonNav"><LinkLista href="/chamados">Chamados</LinkLista></Button></LinhaLista>
                    <LinhaLista><Button className="buttonNav"><LinkLista href="/filtro">Filtro e Relatório</LinkLista></Button></LinhaLista>

                    <ContainerImg>
                        {/* <img src={logoNoc}></img> */}
                    </ContainerImg>

                </Lista>

            </Nav>
        </Head>
    )
}
export default Header;