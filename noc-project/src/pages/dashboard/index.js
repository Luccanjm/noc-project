import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';
import {ContainerInput} from './styles';

const Dashboard = () =>{
    <>
    </>
    return(
        <>
        <div>
            <ContainerInput>
  <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Usuário</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
  </InputGroup>
  <InputGroup size="lg">
    <InputGroup.Prepend>
      <InputGroup.Text id="inputGroup-sizing-lg">Senha</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm"/>
  </InputGroup>
  </ContainerInput>
</div>
        </>
        );
}
export default Dashboard;