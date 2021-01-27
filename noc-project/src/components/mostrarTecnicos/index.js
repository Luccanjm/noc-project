import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import {Container} from './styles';
import api from '../../services/api';

const Tecnico = () => {
    const [tecnicos, setTecnicos] = useState([]);
    const [novoTecnico, setNovoTecnico] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');

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

    return(
        <>
          <Container>
          <select>
                    
                    { tecnicos.map(
                    (item) =>
                    <option>{item.nome}</option>
                    )}

                </select>
        </Container>
    </>
    );
}
export default Tecnico;