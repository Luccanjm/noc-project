import styled from 'styled-components';
export const BoxIcon = styled.div`
    cursor:pointer;
    width:20px;
    height:20px;
`;
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
`;




export const ContainerButton = styled.div`
margin-right:20px;

`;
export const FormPost = styled.form`
display:flex;
`;

export const Input = styled.input`
width: auto;
height:50px;
border-radius:5px;
border:none;
margin-right:5px;
padding:10px;
background:rgba(255, 255, 255, 0.8);


`;

export const Select = styled.select`
width: auto;
height:50px;
border-radius:5px;
border:none;
margin-right:5px;
background:rgba(255, 255, 255, 0.8);

`;
export const Option = styled.option`
`;
export const ButtonSubmit = styled.button`
width: 150px;
height:50px;
border-radius:5px;
border:none;
background: #28a745;


`;