import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import {Container} from './styles';
import api from '../../services/api';

const Status = () => {
    const [statusChamadoE, setStatusChamadoE] = useState([]);
    const [novoStatus, setStatus] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');

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
                    status: novoStatus
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
                status: novoStatus
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
        <>
        <select>
                  
                  { statusChamadoE.map(
                  (item) =>
                  <option>{item.status}</option>
                  )}

              </select>
      </>
  </> );
}
export default Status; 