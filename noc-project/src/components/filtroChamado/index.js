import React, {
    useCallback,
    useState,
    useEffect
} from 'react';
import { FiTrash } from "react-icons/fi";

import {Container,BoxIcon, FormPost,Input, Select, Option, ButtonSubmit} from './styles';
import {Table, Alert} from 'react-bootstrap';
import api from '../../services/api';
import mostrarTecnicos from '../mostrarTecnicos';
import Tecnico from '../mostrarTecnicos';
import swal from 'sweetalert';

const FiltroChamado = () => {
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
// ---------------------------------------------------------------

      const [data, setData] = useState([])   
      const [dataKeys, setDataKeys] = useState([])
      const [originalData, setOriginalData] = useState();

      useEffect( (chamadoE) => {
          const fetchData = async (chamadoE) => {
            try{
              const requestData = await api.get(`/chamado`)
              setData(requestData.chamadoE)
              setDataKeys(Object.keys(requestData.chamadoE[0]))
              setOriginalData(requestData.chamadoE);
            }catch(err){}
  
          }
          fetchData(chamadoE)
        }, []);
  
      function handleInput(e){
        const inputValue = e.target.value; // e.target corresponde ao elemento input.
        setData(searchTable(inputValue));  // assumindo `data` como propriedade global do 
                                           // estado Nao precisa passar como parametro.

       
        }
        function searchTable(value) {
            const filteredData = [];
           
            if (value.length === 0) {
              return originalData; // ESTE RETORNO IRA RESTAURAR OS DADOS ORIGINAIS DO 
                                  // DATA
            }
           
            for (let i = 0; i < chamadoE.length; ++i) {
             const newValue = value.toLowerCase(); // nao redeclare o value.
           
             const user = chamadoE[i].mesChamado.toLowerCase();
           
             if (user.includes(newValue)) {
               filteredData.push(chamadoE[i]);
             }
            }
            return filteredData;
           }


    return(
        <>
        <Container>
        <input
  className="form-input"
  onChange={() => handleInput()} 
  id="input-table"
  placeholder="mês filtro"
/>
 
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
                <td> {item.id}</td>
                <td> {item.numeroChamado}</td>
                <td> {item.mesChamado}</td>
                <td> {item.statusChamado}</td>
                <td> {item.tecnicoChamado}</td>
                <td> {item.sistema}</td>
                <td> {item.requerenteChamado}</td>
                <td> {item.valorBoleto}</td>
                <td><BoxIcon><FiTrash onClick={() => removeChamados(item.id)}></FiTrash></BoxIcon></td>  
            
                
            </tr>
                            
        )}
    </tbody> 
                
</Table> 
      
      
</Container>

  </> );
}
export default FiltroChamado; 




