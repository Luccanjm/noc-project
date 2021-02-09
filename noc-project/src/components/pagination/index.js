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
    const [pageC, setPageC] = useState('');
    const [pages, setPages] = useState([]);
    

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

        let pagina = 2;

        const mostrarPaginas = useCallback(
            async()=> {
                try {
                    const resposta = await api.get(`chamado/?_page=${pagina}&_limit=5`);
                    setPages(resposta.data);
                    console.log(pages);
                } catch (error) {
                    console.log("Erro na busca da API(mostrarPaginas)", error);
                    setErroMensagem(error);
                }
            }
        );
        useEffect(() =>{
            mostrarPaginas();
        }, [mostrarPaginas])

        function aumentarPagina(){
            pagina= pagina + 1;
            // console.log(pagina);
            toString(pagina);
            window.location.reload(true);
        }
        function diminuirPagina(){
            pagina = pagina - 1;
            // console.log(pagina);
            toString(pagina);
            window.location.reload(true);

        }

    return(
        <>
        <Container>

        <button onClick={aumentarPagina}> Aumenta</button>
        <button onClick={diminuirPagina}> Diminui</button>

 
 <Table responsive="sm" id="minhaTabela">
    <thead>
        <th>ID</th>
     
    </thead>
    
    <tbody>
        
        {pages.map((item) =>
            <tr>
                <td key={item.id}> {item.id}</td>
        
            </tr>
                            
        )}
    </tbody> 
                
</Table> 
      
      
</Container>

  </> 
  );
}
export default PaginationC; 




