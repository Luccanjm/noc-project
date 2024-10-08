import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import {ContainerTable} from './styles';
import {Table } from 'react-bootstrap';
import api from '../../services/api';


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
                    statusChamado: statusChamado,
                    valorBoleto: valorBoleto,
                    mesChamado: mesChamado
                }
    
                if (!numeroChamado || !sistema || !requerenteChamado || !tecnicoChamado || !statusChamado || !valorBoleto || !mesChamado) {
                    setErroMensagem('Campos vazios');
                    console.log(erroMensagem);
                    return;
                }
                setErroMensagem('');

                try {
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


 {/* </ContainerCard> */}
    return(
        <ContainerTable>
            
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
                            <td key={item.numeroChamado}> {item.numeroChamado}</td>
                            <td key={item.mesChamado}> {item.mesChamado}</td>
                            <td key={item.statusChamado}> {item.statusChamado}</td>
                            <td key={item.tecnicoChamado}> {item.tecnicoChamado}</td>
                            <td key={item.sistema}> {item.sistema}</td>
                            <td key={item.requerenteChamado}> {item.requerenteChamado}</td>
                            <td key={item.valorBoleto}> {item.valorBoleto}</td>
                            
                            
                        </tr>
                                        
                    )}
                </tbody> 
                            
            </Table>
                


        </ContainerTable>

   );
}
export default ExibirChamados; 




