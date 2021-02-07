import React, {
    useCallback,
    useState,
    useEffect,
    Component
} from 'react';
import Pdf from "react-to-pdf";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import api from '../../services/api';
import { Impressao } from './impressao';

import {Container} from './styles';
import logo from '../../assets/logo.png';

const GerarPdf = () =>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
const [mesChamadoE, setMesChamadoE] = useState([]);

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

    
  const visualizarImpressao = async () => {
    console.log('report', chamadoE);
    const classeImpressao = new Impressao(chamadoE);
    const documento = await classeImpressao.PreparaDocumento();
    pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
  }
    return(
        <>
          
            <button className="btn" onClick={visualizarImpressao}>
                 Visualizar documento
            </button>
        </>
    );
}

export default GerarPdf;