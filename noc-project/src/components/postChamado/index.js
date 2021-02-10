import React, {
    useCallback,
    useState,
    useEffect
} from 'react';
import { FiTrash } from "react-icons/fi";

import {Container,BoxIcon, FormPost,Input, Select, Option, ButtonSubmit} from './styles';
import {Table, Alert, Pagination} from 'react-bootstrap';
import api from '../../services/api';
import mostrarTecnicos from '../mostrarTecnicos';
import Tecnico from '../mostrarTecnicos';
import swal from 'sweetalert';
import PaginationC from '../pagination';

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
// sistemas
    const [sistemas, setSistemas] = useState([]);
// statusChamado
    const [statusChamadoE, setStatusChamadoE] = useState([]);
// MesChamado
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
                if(!numeroChamado && !mesChamado && !statusChamado && !tecnicoChamado && !sistema){
                    setErroMensagem('Campos vazios');
                    swal("Info", "Campos vazios, por favor preencha os campos.", "info");
                    console.log(erroMensagem);
                    return;
                }
                if (!numeroChamado ) {
                    setErroMensagem('Campos numero chamado vazio');
                    swal("Info", "Campo número chamado vazio, por favor preencha o número do chamado para adicionar o chamado.", "info");
                    console.log(erroMensagem);
                    return;
                }else if(!mesChamado){
                    setErroMensagem('Campo mês chamado vazio, por favor preencha o mês do chamado para adicionar o chamado.');
                    swal("Info", "Campo mês vazio!", "info");
                    console.log(erroMensagem);
                    return;
                }else if(!statusChamado){
                    setErroMensagem('Campo status chamado vazio!');
                    swal("Info", "Campo status vazio, por favor preencha o status do chamado para adicionar o chamado.", "info");
                    console.log(erroMensagem);
                    return;
                }
             
                else if(!tecnicoChamado){
                    setErroMensagem('Campo tecnico chamado vazio!');
                    swal("Info", "Campo técnico chamado vazio, por favor preencha o técnico do chamado para adicionar o chamado.", "info");
                    console.log(erroMensagem);
                    return;
                }
                else if(!sistema){
                    setErroMensagem('Campo sistema vazio!');
                     swal("Info", "Campo sistema vazio, por favor preencha o sistema do chamado para adicionar o chamado.", "info");
                    console.log(erroMensagem);
                    return;
                } else if(!valorBoleto){
                    setErroMensagem('Campo valor boleto vazio!');
                    swal("Info", "Campo valor vazio,por favor preencha o valor do Boleto para adicionar o chamado. Caso o valor não exista, preencha com 0.", "info");
                    console.log(erroMensagem);
                    return;
                }
                // else if(!requerenteChamado){
                //     setErroMensagem('Campo requerente chamado vazio!');
                //     swal("Info", "Campo requerente chamado vazio!", "info");
                //     console.log(erroMensagem);
                //     return;
                // }
               
                setErroMensagem('');
           
                try {
                    let naoCria = 0;

                    chamadoE.filter(i =>
                        numeroChamado.includes(i.numeroChamado)
                      ).length > 0
                        ? console.log("número repetido", naoCria = 1)
                        : console.log("Criado com sucesso", naoCria);
                        if(naoCria === 0){
                    swal("Sucesso", "Chamado criado com sucesso!", "success");

                    const resposta = await api.post('chamado', parametros);
                    mostrarChamados('');
                    setNumeroChamado('');
                    setSistema('');
                    setRequerenteChamado('');
                    setTecnicoChamado('');
                    setStatusChamado('');
                    valorBoleto('');
                    mesChamado('');
                    // console.log("Novo chamado adicionado com sucesso!");

                        }else{
                            swal("Atenção", "Número de chamado já existente!", "warning");
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


    // const removerChamado = useCallback(
    //     async(id) => {
    //         try {
    //             await api.delete(`chamado/${id}`);
    //             console.log("Chamado removido.")
    //             mostrarChamados();
    //         } catch (error) {
    //             setErroMensagem(error);
    //         }
    //     }, [mostrarChamados, chamadoE]
    // );

    const removeChamados = useCallback(
        async (chamadoE) => {
          await api.delete(`chamado/${chamadoE.id}`);
    
          mostrarChamados();
        },[mostrarChamados],
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
        <Container>
            <FormPost
            onSubmit={(e) => adicionarChamado(e)}>
          <Input
            value={numeroChamado}
            onChange={(e) => setNumeroChamado(e.target.value)}
            type="number"
            placeholder="Número Chamado"/>

            
        <Select onChange={(e) => setMesChamado(e.target.value)}>  
            <Option value="" selected disabled hidden>Mês</Option>
                        { mesChamadoE.map(
                                        (item) =>
                                        <Option value={chamadoE.mesChamado}>{item.nomeMes}</Option>
                                        )}
                </Select>
                
        <Select onChange={(e) => setStatusChamado(e.target.value)}>  
        <Option value="" selected disabled hidden>Status</Option>

                        { statusChamadoE.map(
                                        (item) =>
                                        <Option value={chamadoE.statusChamado}>{item.status}</Option>
                                        )}
                </Select>
          
  

        <Select onChange={(e) => setTecnicoChamado(e.target.value)}>  
        <Option value="" selected disabled hidden>Técnico</Option>

                { tecnicos.map(
                                (item) =>
                                <Option value={chamadoE.tecnicoChamado}>{item.nome}</Option>
                                )}
        </Select>
    
           <Select onChange={(e) => setSistema(e.target.value)}>  
           <Option value="" selected disabled hidden>Sistema</Option>

            { sistemas.map(
                                 (item) =>
                                <Option value={chamadoE.sistema}>{item.nome}</Option>
                                )}
        </Select>


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
      
            </FormPost>
   
                <PaginationC></PaginationC>
 {/* <Table responsive="sm" id="minhaTabela">
    <thead>
        <th>ID</th>
        <th>Chamado </th>
        <th>Mês</th>
        <th>Status</th>
        <th>Técnico</th>
        <th>Sistema</th>
        <th>Requerente</th>
        <th>Valor do boleto</th>
        <th>#</th>
    </thead>
    
    <tbody>
        
        {chamadoE.map((item) =>
            <tr>
                <td key={item.id}> {item.id}</td>
                <td key={item.numeroChamado}> {item.numeroChamado}</td>
                <td key={item.mesChamado}> {item.mesChamado}</td>
                <td key={item.statusChamado}> {item.statusChamado}</td>
                <td key={item.tecnicoChamado}> {item.tecnicoChamado}</td>
                <td key={item.sistema}> {item.sistema}</td>
                <td key={item.requerenteChamado}> {item.requerenteChamado}</td>
                <td key={item.valorBoleto}> {item.valorBoleto}</td>
                <td><BoxIcon><FiTrash onClick={(e) => removeChamados(e.target.id)}></FiTrash></BoxIcon></td>  
            
                
            </tr>
                            
        )}
    </tbody> 
                
</Table>  */}
      
      
</Container>

  </> );
}
export default PostChamado; 




