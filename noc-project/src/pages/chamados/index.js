import React from 'react';
import {} from 'react-bootstrap';
import { Main, ContainerGeral} from './styles';

import PostChamado from '../../components/postChamado';
import Footer from '../../components/footer';
import Header from '../../components/header';


const Chamados = () =>{
    <>
    </>

    return(
        <ContainerGeral>
            <Header id="header"></Header>
            <Main>
                {/* <ExibirChamados id="ExibirChamados"></ExibirChamados> */}
                <PostChamado id="PostChamado"></PostChamado>
            </Main>
        <Footer id="footer"></Footer>
    
        </ContainerGeral>
    );
}

export default Chamados;