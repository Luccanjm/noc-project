import styled from 'styled-components';

export const Container = styled.div`
  .table{
    background:rgba(255, 255, 255, 0.8);
    width:1100px;
    margin-top:15px;
    text-align:center;
    border-radius: 0 0 15px 15px;
    border: none;
  }
  .table-responsive-sm{
    display:flex;
    justify-content:center;
  }
  #minhaTabela tr:hover td{
    background-color: #145E7D;
    color:white;
    border:1px solid white;
  }

  #minhaTabela tr.selecionado td{
    background-color: #aff7ff;
  }
  .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    border-radius:5px;
    justify-content:center;
    
  }
  .pagination > .active > a{
    background-color: #47ccde ;
    border-color: #47ccde ;
    color: #fff;
    border-radius:5px;
  }
  .pagination > li > a{
    border: 1px solid #47ccde ;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    background:rgba(255, 255, 255, 0.8);
    border-radius:5px;
  }
  .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #47ccde ;
    border-color: #47ccde;
    outline: none ;
    border-radius:5px;
  }
  .pagination > li > a, .pagination > li > span{
    color: #145E7D;
    border-radius:5px;
  }
  .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius:5px;

  }
`;


