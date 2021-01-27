import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import {ContainerTable} from './styles';
import {Table,Container, Row, Col, Form, InputGroup,FormControl, Dropdown, NavItem, NavLink } from 'react-bootstrap';
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
    const [boletoIsTrue, setBoletoIsTrue] = useState('');
    const [valorBoleto, setValorBoleto] = useState();
    const [erroMensagem, setErroMensagem] = useState('');
// tecnicos
    const [tecnicos, setTecnicos] = useState([]);
    const [novoTecnico, setNovoTecnico] = useState('');
// sistemas
const [sistemas, setSistemas] = useState([]);
const [novoSistema, setNovoSistema] = useState('');

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
                    boletoIsTrue: boletoIsTrue,
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
                    boletoIsTrue('');
                    valorBoleto('');
                    console.log("Novo chamado adicionado com sucesso!");
                } catch (error) {
                    setErroMensagem('Erro na criação');
                    
                }
            }, [mostrarChamados, numeroChamado, sistema, requerenteChamado, tecnicoChamado, statusChamado, boletoIsTrue, valorBoleto]
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
                    boletoIsTrue: boletoIsTrue,
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

    // tecnicos
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


    return(
        <>
        
<ContainerTable>
  
    <Table responsive="sm">
        <thead>
            <tr>
                <td>Chamado</td>
                <td>Status </td>
                <td>Técnico</td>
                <td>Sistema</td>
                <td>Requerente</td>
                <td>Valor Boleto</td>
        
                </tr>
        </thead>
        <tbody>
        <tr>
    <td> 
    
    <FormControl className="numero" aria-label="Chamado)" />
    
  </td>
      <td>
        <Form.Group controlId="Select1">
    <Form.Control className="status" as="select" >
    <option>Pendente</option>
      <option>Finalizado</option>
      <option>Processando</option>
    </Form.Control>
  </Form.Group>
  </td>
  <td>
  <Form.Group controlId="Select2">
    <Form.Control as="select">   
                    
                    { tecnicos.map(
                    (item) =>
                    <option>{item.nome}</option>
                    )}

    </Form.Control>
  </Form.Group>
  </td>
  <td>
  <Form.Group controlId="Select3">
    <Form.Control as="select">
    { sistemas.map(
                    (item) =>
                    <option>{item.nome}</option>
                    )}
    </Form.Control>
  </Form.Group>
  </td>
      <td> 
        <FormControl aria-label="Amount (to the nearest dollar)" />
      </td>
      <td> 
        <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text>R$</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Amount (to the nearest real)" />
    <InputGroup.Append>
      <InputGroup.Text>,00</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
  </td>   
    </tr>
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