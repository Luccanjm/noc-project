import React from 'react';
import {InputGroup, FormControl, Button} from 'react-bootstrap';
import {ContainerInput, Box, Footer, ContainerImg, InputLogin, ContainerBox, PInput} from './styles';
import logoAzul from '../../assets/logoAzul.png';


const Dashboard = () =>{
    <>
    </>
    return(
        <>
        <Box>

            <ContainerBox>
              <ContainerImg>
                <img src={logoAzul} alt></img>
              </ContainerImg>


              <ContainerInput>
                <PInput>Usuário</PInput>
                <InputLogin type="email"></InputLogin>
                <PInput>Senha</PInput>
                <InputLogin type="password"></InputLogin>
                <Button as="input" type="submit" value="Entrar" />{' '}

              </ContainerInput>
            </ContainerBox>
        </Box>
        <Footer>
          <p>&copy; Desenvolvido pelo NOC | Sumicity</p>
        </Footer>
</>
        );
}
export default Dashboard;