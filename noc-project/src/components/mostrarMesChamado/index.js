import React, {
    useCallback,
    useState,
    useEffect
} from 'react';

import api from '../../services/api';

const MesChamado = () => {
    const [mesChamadoE, setMesChamadoE] = useState([]);
    const [erroMensagem, setErroMensagem] = useState('');
 
    const mostrarMesChamado = useCallback(
        async() => {
            try {
                const resposta = await api.get('mesChamado');
                setMesChamadoE(resposta.data);
            } catch (error) {
                console.log("Erro na busca da API", error);
                setErroMensagem(error);
            }
        },[mesChamadoE]
        );
    
        useEffect(() =>{
            mostrarMesChamado();
        }, [mostrarMesChamado])

    return(
        <>
            <select>
                  
                  { mesChamadoE.map(
                  (item) =>
                  <option>{item.nomeMes}</option>
                  )}

              </select>
        </>
        );
}
export default MesChamado;