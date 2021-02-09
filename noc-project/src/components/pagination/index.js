import React, { Component, useCallback, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import api from '../../services/api';
import {Container} from './styles';
import {Table} from 'react-bootstrap';

class PaginationC extends Component {

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
                            {slice.map((item) =>
                                <tr>
                                    <td key={item.id}> {item.id}</td>
                                    <td key={item.numeroChamado}> {item.numeroChamado}</td>
                                    <td key={item.mesChamado}> {item.mesChamado}</td>
                                    <td key={item.statusChamado}> {item.statusChamado}</td>
                                    <td key={item.tecnicoChamado}> {item.tecnicoChamado}</td>
                                    <td key={item.sistema}> {item.sistema}</td>
                                    <td key={item.requerenteChamado}> {item.requerenteChamado}</td>
                                    <td key={item.valorBoleto}> {item.valorBoleto}</td>
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
          perPage: 5,
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