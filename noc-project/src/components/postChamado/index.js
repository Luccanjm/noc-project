import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import {ContainerTable, ContainerPost, FormPost, Infos,Input, Select, Option, ButtonSubmit} from './styles';
import {Table} from 'react-bootstrap';
import api from '../../services/api';
import mostrarTecnicos from '../mostrarTecnicos';
import Tecnico from '../mostrarTecnicos';

const PostChamado = () => {
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
                console.log("Erro na busca da API(mostrarChamados)", error);
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
                    statusChamado: statusChamado,
                    valorBoleto: valorBoleto,
                    mesChamado: mesChamado
                }
    
                if (!numeroChamado ) {
                    setErroMensagem('Campos numero chamado vazio');
                    console.log(erroMensagem);
                    return;
                }else if(!mesChamado){
                    setErroMensagem('Campo mes chamado vazio!');
                    console.log(erroMensagem);
                    return;
                }else if(!requerenteChamado){
                    setErroMensagem('Campo requerente chamado vazio!');
                    console.log(erroMensagem);
                    return;
                }else if(!tecnicoChamado){
                    setErroMensagem('Campo tecnico chamado vazio!');
                    console.log(erroMensagem);
                    return;
                }else if(!statusChamado){
                    setErroMensagem('Campo status chamado vazio!');
                    console.log(erroMensagem);
                    return;
                }else if(!valorBoleto){
                    setErroMensagem('Campo valor boleto vazio!');
                    console.log(erroMensagem);
                    return;
                }else if(!sistema){
                    setErroMensagem('Campo sistema vazio!');
                    console.log(erroMensagem);
                    return;
                }
                setErroMensagem('');
           
                try {
                    let naoCria = 0;

                    chamadoE.filter(i =>
                        numeroChamado.includes(i.numeroChamado)
                      ).length > 0
                        ? console.log("número repetido", naoCria = 1)
                        : console.log("Criado com sucesso", naoCria);
                        if(naoCria === 0){
                        
                    const resposta = await api.post('chamado', parametros);
                    mostrarChamados('');
                    setNumeroChamado('');
                    setSistema('');
                    setRequerenteChamado('');
                    setTecnicoChamado('');
                    setStatusChamado('');
                    valorBoleto('');
                    mesChamado('');
                    console.log("Novo chamado adicionado com sucesso!");

                        }else{
                            alert("Número de chamado já existente.")
                        }
                } catch (error) {
                    setErroMensagem('Erro na criação api(adicionarChamado)');
                    
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
                    statusChamado: statusChamado,
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
            console.log("Erro na busca da API(mostrarMesChamado)", error);
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
                console.log("Erro na busca da API(mostrarTecnicos)", error);
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
            console.log("Erro na busca da API(mostrarSistema)", error);
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
            console.log("Erro na busca da API(mostrarStatus)", error);
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
            <FormPost
            onSubmit={(e) => adicionarChamado(e)}>
        <Infos>
          <Input
            value={numeroChamado}
            onChange={(e) => setNumeroChamado(e.target.value)}
            type="number"
            placeholder="Número Chamado"
          />

            
        <Select onChange={(e) => setMesChamado(e.target.value)}>  
                        { mesChamadoE.map(
                                        (item) =>
                                        <Option value={chamadoE.mesChamado}>{item.nomeMes}</Option>
                                        )}
                </Select>
                
        <Select onChange={(e) => setStatusChamado(e.target.value)}>  
                        { statusChamadoE.map(
                                        (item) =>
                                        <Option value={chamadoE.statusChamado}>{item.status}</Option>
                                        )}
                </Select>
          
          {/* <input
            value={tecnicoChamado}
            onChange={(e) => setTecnicoChamado(e.target.value)}
            placeholder="Técnico Chamado"
          /> */}

        <Select onChange={(e) => setTecnicoChamado(e.target.value)}>  
                { tecnicos.map(
                                (item) =>
                                <Option value={chamadoE.tecnicoChamado}>{item.nome}</Option>
                                )}
        </Select>
    
           <Select onChange={(e) => setSistema(e.target.value)}>  
            { sistemas.map(
                                 (item) =>
                                <Option value={chamadoE.sistema}>{item.nome}</Option>
                                )}
        </Select>

{/*                
          <input
            value={sistema}
            type="text"
            onChange={(e) => setSistema(e.target.value)}
            placeholder="sistema"
          /> */}
          <Input
            value={requerenteChamado}
            type="text"
            onChange={(e) => setRequerenteChamado(e.target.value)}
            placeholder="Requerente Chamado"
          />
        
        <Input
            value={valorBoleto}
            type="number"
            onChange={(e) => setValorBoleto(e.target.value)}
            placeholder="Valor Boleto"
          />
        <ButtonSubmit type="submit" id="link-continuar">
          Adicionar
        </ButtonSubmit>
        </Infos>
      
            </FormPost>
   
 
 <Table responsive="sm">
    <thead>
        <th>ID</th>
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
                <td> {item.id}</td>
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
export default PostChamado; 




