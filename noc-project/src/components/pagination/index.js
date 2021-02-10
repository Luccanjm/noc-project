import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import api from '../../services/api';
import {Container} from './styles';
import {Table} from 'react-bootstrap';



class PaginationC extends Component {
    componentDidMount(){
        this.receivedData()
    }

    receivedData() {
        api
        .get(`chamado`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = 
                <React.Fragment>
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
                            {slice.map((element) =>
                                <tr>
                                    <td key={element.id}> {element.id}</td>
                                    <td key={element.numeroChamado}> {element.numeroChamado}</td>
                                    <td key={element.mesChamado}> {element.mesChamado}</td>
                                    <td key={element.statusChamado}> {element.statusChamado}</td>
                                    <td key={element.tecnicoChamado}> {element.tecnicoChamado}</td>
                                    <td key={element.sistema}> {element.sistema}</td>
                                    <td key={element.requerenteChamado}> {element.requerenteChamado}</td>
                                    <td key={element.valorBoleto}> {element.valorBoleto}</td>
                                    <td></td>  
                                
                                    
                                </tr>
                                            
                            )}
                                                
                            
                        </tbody>
                    </Table>
                    </Container>
                </React.Fragment>

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };
    
    constructor(props) {
        super(props);
        this.state = {
          offset: 0,
          data: [],
          perPage: 10,
          currentPage: 0
    };
    
    }



    render() {
        return (
            <Container>
                
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"Voltar"}
                    nextLabel={"Próximo"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            

            </Container>
        );
    }
}

export default PaginationC;