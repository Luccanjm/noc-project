import React, {
    useCallback,
    useState,
    useEffect
} from 'react';
import { FiTrash } from "react-icons/fi";

import {Container,BoxIcon} from './styles';
import {Table, Pagination, PageItem} from 'react-bootstrap';
import api from '../../services/api';

const PaginationC = () => {
// chamados 
    const [chamadoE, setChamadosE] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');
    const [pageC, setPageC] = useState('1');
    const [pages, setPages] = useState('');


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


        const mostrarPaginas = useCallback(
            async()=> {
                try {
                    const resposta = await api.get(`chamado/?_page=${pageC}&_limit=5`);
                    setPages(resposta.data);
                } catch (error) {
                    console.log("Erro na busca da API(mostrarPaginas)", error);
                    setErroMensagem(error);
                }
            }
        );
        useEffect(() =>{
            mostrarPaginas();
        }, [mostrarPaginas])


  
    return(
        <>
        <Container>
          
        
 
 <Table responsive="sm" id="minhaTabela">
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
                <td><BoxIcon><FiTrash ></FiTrash></BoxIcon></td>  
            </tr>
                            
        )}
    </tbody> 
                
</Table> 
      
      
</Container>

  </> 
  );
}
export default PaginationC; 




