import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import {ContainerTable, ContainerButton, ContainerCard} from './styles';
import {Table,Container, Row, Col,Card, Form, InputGroup,FormControl,Button } from 'react-bootstrap';
import api from '../../services/api';
import mostrarTecnicos from '../mostrarTecnicos';
import Tecnico from '../mostrarTecnicos';

const ExibirChamados = () => {
// chamados 
    const [chamadoE, setChamadosE] = useState([]);
    const [numeroChamado, setNumeroChamado] = useState('');
    const [sistema, setSistema] = useState('');
    const [requerenteChamado, setRequerenteChamado] = useState('');
    const [tecnicoChamado, setTecnicoChamado] = useState('');
    const [statusChamado, setStatusChamado] = useState('');
    const [valorBoleto, setValorBoleto] = useState();
    const [mesChamado, setMesChamado] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');
    // ChamadoId
    const [chamadoId, setChamadoId] = useState({});

// tecnicos
    const [tecnicos, setTecnicos] = useState([]);
    const [novoTecnico, setNovoTecnico] = useState('');
// sistemas
    const [sistemas, setSistemas] = useState([]);
    const [novoSistema, setNovoSistema] = useState('');
// statusChamado
    const [statusChamadoE, setStatusChamadoE] = useState([]);
    const [novoStatus, setStatus] = useState('');
//MesChamado
const [mesChamadoE, setMesChamadoE] = useState([]);

// -------------------------------------------------------------------
    const mostrarChamados = useCallback(
        async() => {
            try {
                const resposta = await api.get('chamado');
                setChamadosE(resposta.data);
            } catch (error) {
                console.log("Erro na busca da API", error);
                setErroMensagem(error);
            }
        },[chamadoE]
        );

        useEffect(() =>{
            mostrarChamados();
        }, [mostrarChamados])


        const adicionarChamado = useCallback(

            async (e) => {
                e.preventDefault();
    
                const parametros = {
                    numeroChamado: numeroChamado,
                    sistema: sistema,
                    requerenteChamado: requerenteChamado,
                    tecnicoChamado: tecnicoChamado,
                    statuschamado: statusChamado,
                    valorBoleto: valorBoleto,
                    mesChamado: mesChamado
                }
    
                if (!numeroChamado) {
                    setErroMensagem('Campos vazios');
                    return;
                }
                setErroMensagem('');
                try {
                    await api.post('chamado', parametros);
                    mostrarChamados('');
                    setNumeroChamado('');
                    setSistema('');
                    setRequerenteChamado('');
                    setTecnicoChamado('');
                    setStatusChamado('');
                    valorBoleto('');
                    mesChamado('');
                    console.log("Novo chamado adicionado com sucesso!");
                } catch (error) {
                    setErroMensagem('Erro na criação');
                    
                }
            }, [mostrarChamados, numeroChamado, sistema, requerenteChamado, tecnicoChamado, statusChamado, valorBoleto, mesChamado]
    );

    const atualizarChamado = useCallback(
        async(id) => {
            const parametros ={
                ...chamadoE,
                    numeroChamado: numeroChamado,
                    sistema: sistema,
                    requerenteChamado: requerenteChamado,
                    tecnicoChamado: tecnicoChamado,
                    statuschamado: statusChamado,
                    valorBoleto: valorBoleto,
                    mesChamado: mesChamado
            }
            try {
                await api.put(`chamado/${id}`, parametros);
            } catch (error) {
                setErroMensagem(error);
            }
        }
    );

    const removerChamado = useCallback(
        async(id) => {
            try {
                await api.delete(`chamado/${id}`);
                mostrarChamados();
            } catch (error) {
                setErroMensagem(error);
            }
        }, [mostrarChamados, chamadoE]
    );
//ChamadoId-------------------------------------------------------------------------------
const mostrarChamadoId = useCallback(
    async(idChamado)=>{
        try {
            const resposta = await api.get(`chamado/${idChamado}`);
            setChamadoId(resposta.data);
            console.log("resposta ChamadoId", resposta);
        } catch (error) {
            console.log("Erro na busca API ChamadoId",error);
            setErroMensagem(error)
        }
    },[]
);
// MesChamado ------------------------------------------------------------------------------------------
  
const mostrarMesChamado = useCallback(
    async() => {
        try {
            const resposta = await api.get('mesChamado');
            setMesChamadoE(resposta.data);
        } catch (error) {
            console.log("Erro na busca da API", error);
            setErroMensagem(error);
        }
    },[mesChamadoE]
    );

    useEffect(() =>{
        mostrarMesChamado();
    }, [mostrarMesChamado])

// tecnicos-------------------------------------------------------------------------------
    const mostrarTecnicos = useCallback(
        async () => {
            try {
                const resposta = await api.get('tecnico');
                setTecnicos(resposta.data);
            } catch (error) {
                console.log("Erro na busca da API", error);
                setErroMensagem(error);
            }
        },[tecnicos]
    );
    useEffect(() =>{
        mostrarTecnicos();
    }, [mostrarTecnicos])
    

// sistemas
const mostrarSistemas = useCallback(
    async() => {
        try {
            const resposta = await api.get('sistema');
            setSistemas(resposta.data);
        } catch (error) {
            console.log("Erro na busca da API", error);
            setErroMensagem(error);
        }
    },[sistemas]
    );

    useEffect(() =>{
        mostrarSistemas();
    }, [mostrarSistemas])

//Status -----------------------------------------------------
const mostrarStatus = useCallback(
    async() => {
        try {
            const resposta = await api.get('statusChamado');
            setStatusChamadoE(resposta.data);
        } catch (error) {
            console.log("Erro na busca da API", error);
            setErroMensagem(error);
        }
    },[statusChamadoE]
    );

    useEffect(() =>{
        mostrarStatus();
    }, [mostrarStatus])

    return(
        <>
        <ContainerTable>
            {/* <ContainerCard> */}
  <Card className="card-detalhes"> 
  <Table responsive="sm">
 <thead>
    <th>Chamado </th>
    <th>Mês</th>
   <th>Status</th>
   <th>Técnico</th>
   <th>Sistema</th>
   <th>Requerente</th>
   <th>Valor do boleto</th>
   <th ></th>
 </thead>
 <tbody>
    <td>
        <FormControl className="numero" aria-label="Chamado)"value={chamadoE.numeroChamado} /> 
    </td>
    <td>
    <Form.Group controlId="Select1">
        <Form.Control className="status" as="select" >
            { mesChamadoE.map(
                    (item) =>
                    <option value={chamadoE.mesChamado}>{item.nomeMes}</option>
                    )}
        </Form.Control>
    </Form.Group>
  </td>
  <td>
    <Form.Group controlId="Select1">
        <Form.Control className="status" as="select" >
            { statusChamadoE.map(
                    (item) =>
                    <option value={chamadoE.statusChamado}>{item.status}</option>
                    )}
        </Form.Control>
    </Form.Group>
  </td>
    <td> 
        <Form.Group controlId="Select2">
            <Form.Control as="select">   
                    
                    { tecnicos.map(
                    (item) =>
                    <option value={chamadoE.tecnicoChamado}>{item.nome}</option>
                    )}

            </Form.Control>
     </Form.Group>
  </td>
   <td>  
        <Form.Group controlId="Select3">
            <Form.Control as="select">
                { sistemas.map(
                                (item) =>
                                <option value={chamadoE.sistema}>{item.nome}</option>
                                )}
            </Form.Control>
        </Form.Group>
    </td>
    <td> 
        <FormControl aria-label="Amount (to the nearest dollar)" value={chamadoE.requerenteChamado}/>
    </td>
   <td>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text value={chamadoE.valorBoleto}>R$</InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl aria-label="Amount (to the nearest real)" />
        </InputGroup>
    </td>
<td>
    <ContainerButton>
    {/* <Col classclassName="button" xs={1}>  */}
        <Button variant="primary" onClick={(parametros)=> adicionarChamado(parametros)}>Enviar</Button>{' '}
    {/* </Col>  */}
    </ContainerButton>
    </td>
 </tbody>
 </Table>

 
 </Card>
 {/* </ContainerCard> */}

 <Table responsive="sm">
    <thead>
        <th>Chamado </th>
        <th>Mês</th>
        <th>Status</th>
        <th>Técnico</th>
        <th>Sistema</th>
        <th>Requerente</th>
        <th>Valor do boleto</th>
    </thead>
    
    <tbody>
        {chamadoE.map((item) =>
            <tr>
                <td> {item.numeroChamado}</td>
                <td> {item.mesChamado}</td>
                <td> {item.statusChamado}</td>
                <td> {item.tecnicoChamado}</td>
                <td> {item.sistema}</td>
                <td> {item.requerenteChamado}</td>
                <td> {item.valorBoleto}</td>
                
                
            </tr>
                            
        )}
    </tbody> 
                
</Table>
      


</ContainerTable>
  </> );
}
export default ExibirChamados; 




