import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import {Container} from './styles';
import api from '../../services/api';

const Sistema = () => {
    const [sistemas, setSistemas] = useState([]);
    const [novoSistema, setNovoSistema] = useState('');
    const [erroMensagem, setErroMensagem] = useState('');

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
        <Container>
            <select>
                    
                    { sistemas.map(
                    (item) =>
                    <option>{item.nome}</option>
                    )}

            </select>
      </Container>
  </> 
    );
}
export default Sistema; 