import React, {
    useCallback,
    useState,
    useEffect
} from 'react';
import Header from '../header';
import Footer from '../footer';
import Pdf from "react-to-pdf";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import {Container, ContainerSelect, Select, Option,ContainerTitle,PTitle, ContainerContagem, ButtonSubmit, ContainerButton} from './styles';
import {Table} from 'react-bootstrap';
import api from '../../services/api';
import { Impressao } from '../gerarPdf/impressao';


const FiltroChamado = () => {
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

    const [filtro, setFiltro] = useState([]);
    const [mesFiltro, setMesfiltro] = useState('');

    const [somaBoletos, setSomaBoletos] = useState([]);

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

       
// ---------------------------------------------------------------

    const filtroMes = useCallback(
    async() => {
        try {
            const resposta = await api.get(`chamado?mesChamado=${mesFiltro}`);
            setFiltro(resposta.data);            
            setSomaBoletos(valorTotal);
            // console.log("Valor Total Mês:", valorTotal);
           
        } catch (error) {
            console.log("Erro na busca da API(filtroMes)", error);
            setErroMensagem(error);
        }
    },[filtro]
    );

    useEffect(() =>{
        filtroMes();
    }, [filtroMes])
    

    // Gerar Pdf Filtrado

    const visualizarImpressao = async () => {
        console.log('report', filtro);
        const classeImpressao = new Impressao(filtro);
        const documento = await classeImpressao.PreparaDocumento();
        pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
    }

      let valorTotal = 0;
      for (let i = 0; i < filtro.length; i++) {
          valorTotal += parseFloat(filtro[i].valorBoleto);
      }

// console.log("valorTotal", valorTotal);
     return(
        <>
            <Header id="header"></Header>
            <ContainerTitle><PTitle>Selecione o mês que deseja verificar os chamados</PTitle></ContainerTitle>
            <ContainerSelect>
                    <Select  onChange={(e) => setMesfiltro(e.target.value)}>  
                        <Option value="" selected disabled hidden>----</Option>
                            { mesChamadoE.map((item) =>
                                <Option value={chamadoE.mesChamado}>{item.nomeMes}</Option>
                            )}
                </Select>
            </ContainerSelect>
            <Container>

                <Table>
                    <thead>
                        <th>ID</th>
                        <th>Chamado </th>
                        <th>Mês</th>
                        <th>Status</th>
                        <th>Técnico</th>
                        <th>Sistema</th>
                        <th>Requerente</th>
                        <th>Valor do boleto</th>
                    </thead>
                    <tbody>
                        {filtro.map((item) =>
                            <tr>
                                <td key={item.id}> {item.id}</td>
                                <td key={item.numeroChamado}> {item.numeroChamado}</td>
                                <td key={item.mesChamado}> {item.mesChamado}</td>
                                <td key={item.statusChamado}> {item.statusChamado}</td>
                                <td key={item.tecnicoChamado}> {item.tecnicoChamado}</td>
                                <td key={item.sistema}> {item.sistema}</td>
                                <td key={item.requerenteChamado}> {item.requerenteChamado}</td>
                                <td key={item.valorBoleto}>R$ {item.valorBoleto}</td>
                                
                            </tr>
                        )}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="textTotal">Valor Total</td>
                            <td key={valorTotal} className="textTotal">R$ {valorTotal}</td></tr>
                    </tbody>
           
                </Table>
            </Container>
            <ContainerContagem>
            </ContainerContagem>

            <ContainerButton>
                    <ButtonSubmit className="btn" onClick={visualizarImpressao}>
                            Gerar relatório 
                        </ButtonSubmit>
                 </ContainerButton>
            <Footer id="footer"></Footer>
  </> );
}

export default FiltroChamado; 




