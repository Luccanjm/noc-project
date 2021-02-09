import React from 'react';
import {Head, LinhaLista, LinkLista, Lista, Button, ContainerImg} from './styles';
import {Nav, Dropdown} from 'react-bootstrap';
import logoBranco from '../../assets/logo.png';
// import logo2 from '../../assets/logo2';


const Header = () =>{


return(
<Head>
<Nav variant="pills" defaultActiveKey="/home">
<ContainerImg>
    <img src={logoBranco} alt></img>
</ContainerImg>
<Lista>
<LinhaLista><Button><LinkLista href="/chamados">Chamados</LinkLista></Button></LinhaLista>
<LinhaLista><Button><LinkLista href="/filtro">Filtrar Chamados</LinkLista></Button></LinhaLista>
<LinhaLista><Button><LinkLista href="#">Criar Perfil Técnico</LinkLista></Button></LinhaLista>

{/* <ContainerImg>
    <img src={logo2} alt></img>
</ContainerImg> */}

{/* <LinhaLista id="dropdownlista"><Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" >
            lucca.martinelli
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Sair</Dropdown.Item>

        </Dropdown.Menu>
    </Dropdown>
</LinhaLista> */}
</Lista>

</Nav>
</Head>
)
}
export default Header;