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
                    valorBoleto: valorBoleto
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
                    console.log("Novo chamado adicionado com sucesso!");
                } catch (error) {
                    setErroMensagem('Erro na criação');
                    
                }
            }, [mostrarChamados, numeroChamado, sistema, requerenteChamado, tecnicoChamado, statusChamado, valorBoleto]
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
                    valorBoleto: valorBoleto
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
    
    const adicionarTecnico = useCallback(

        async (e) => {
            e.preventDefault();

            const parametros = {
                nome: novoTecnico
            }

            if (!novoTecnico) {
                setErroMensagem('Nome vazio');
                return;
            }
            setErroMensagem('');
            try {
                await api.post('tecnico', parametros);
                mostrarTecnicos();
                setNovoTecnico('');
                console.log("Novo tecnico adicionado com sucesso!");
            } catch (error) {
                setErroMensagem('Erro na criação');
                
            }
        }, [mostrarTecnicos, novoTecnico]
);

const atualizarTecnico = useCallback(
    async(id) => {
        const parametros ={
            ...tecnicos,
            nome: novoTecnico
        }
        try {
            await api.put(`tecnico/${id}`, parametros);
        } catch (error) {
            setErroMensagem(error);
        }
    }
);

const removerTecnico = useCallback(
    async(id) => {
        try {
            await api.delete(`tecnico/${id}`);
            mostrarTecnicos();
        } catch (error) {
            setErroMensagem(error);
        }
    }, [mostrarTecnicos, tecnicos]
);

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

    const adicionarSistema = useCallback(

        async (e) => {
            e.preventDefault();

            const parametros = {
                nome: novoSistema
            }

            if (!novoSistema) {
                setErroMensagem('Nome vazio');
                return;
            }
            setErroMensagem('');
            try {
                await api.post('sistema', parametros);
                mostrarSistemas();
                setNovoSistema('');
                console.log("Novo sistema adicionado com sucesso!");
            } catch (error) {
                setErroMensagem('Erro na criação');
                
            }
        }, [mostrarSistemas, novoSistema]
);

const atualizarSistema = useCallback(
    async(id) => {
        const parametros ={
            ...sistemas,
            nome: novoSistema
        }
        try {
            await api.put(`sistema/${id}`, parametros);
        } catch (error) {
            setErroMensagem(error);
        }
    }
);

const removerSistema = useCallback(
    async(id) => {
        try {
            await api.delete(`sistema/${id}`);
            mostrarSistemas();
        } catch (error) {
            setErroMensagem(error);
        }
    }, [mostrarSistemas, sistemas]
);

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

    const adicionarStatus = useCallback(

        async (e) => {
            e.preventDefault();

            const parametros = {
                nome: novoStatus
            }

            if (!novoStatus) {
                setErroMensagem('Nome vazio');
                return;
            }
            setErroMensagem('');
            try {
                await api.post('statusChamado', parametros);
                mostrarStatus();
                setStatus('');
                console.log("Novo status adicionado com sucesso!");
            } catch (error) {
                setErroMensagem('Erro na criação');
                
            }
        }, [mostrarStatus, novoStatus]
);

const atualizarStatus = useCallback(
    async(id) => {
        const parametros ={
            ...statusChamadoE,
            nome: novoStatus
        }
        try {
            await api.put(`statusChamado/${id}`, parametros);
        } catch (error) {
            setErroMensagem(error);
        }
    }
);

const removerStatus = useCallback(
    async(id) => {
        try {
            await api.delete(`statusChamado/${id}`);
            mostrarStatus();
        } catch (error) {
            setErroMensagem(error);
        }
    }, [mostrarStatus, statusChamadoE]
);


    return(
        <>
        <ContainerTable>
            {/* <ContainerCard> */}
  <Card className="card-detalhes"> 
 <Row >
    <Col>Chamado </Col>
   <Col>Status</Col>
   <Col>Técnico</Col>
   <Col>Sistema</Col>
   <Col>Requerente</Col>
   <Col>Valor do boleto</Col>
   <ContainerButton>
   <Col></Col>
   </ContainerButton>
 </Row>
 <Row>
    <Col>
        <FormControl className="numero" aria-label="Chamado)"value={chamadoE.numeroChamado} /> 
    </Col>
    <Col>
    <Form.Group controlId="Select1">
        <Form.Control className="status" as="select" >
            { statusChamadoE.map(
                    (item) =>
                    <option value={chamadoE.statusChamado}>{item.status}</option>
                    )}
        </Form.Control>
    </Form.Group>
  </Col>
    <Col> 
        <Form.Group controlId="Select2">
            <Form.Control as="select">   
                    
                    { tecnicos.map(
                    (item) =>
                    <option value={chamadoE.tecnicoChamado}>{item.nome}</option>
                    )}

            </Form.Control>
     </Form.Group>
  </Col>
   <Col>  
        <Form.Group controlId="Select3">
            <Form.Control as="select">
                { sistemas.map(
                                (item) =>
                                <option value={chamadoE.sistema}>{item.nome}</option>
                                )}
            </Form.Control>
        </Form.Group>
    </Col>
    <Col> 
        <FormControl aria-label="Amount (to the nearest dollar)" value={chamadoE.requerenteChamado}/>
    </Col>
   <Col xs={2}>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text value={chamadoE.valorBoleto}>R$</InputGroup.Text>
            </InputGroup.Prepend>

            <FormControl aria-label="Amount (to the nearest real)" />
        </InputGroup>
    </Col>
    <ContainerButton>
    <Col classclassName="button" xs={1}> 
        <Button variant="primary" onClick={(chamadoId)=> adicionarChamado(chamadoId)}>Enviar</Button>{' '}
    </Col> 
    </ContainerButton>
 </Row>

 </Card>
 {/* </ContainerCard> */}

 <Table responsive="sm">
    <thead>
        <th>Chamado </th>
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