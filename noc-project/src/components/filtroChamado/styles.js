import styled from 'styled-components';
export const BoxIcon = styled.div`
    cursor:pointer;
    width:20px;
    height:20px;
`;
export const Container = styled.div`
display:flex;
justify-content:center;
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
width: 200px;
height:50px;
border-radius:5px;
border:none;
margin-right:5px;
padding:10px;
background:rgba(255, 255, 255, 0.8);


`;

export const Select = styled.select`
width: 200px;
height:50px;
border-radius:5px;
border:none;
margin-right:5px;
background:rgba(255, 255, 255, 0.8);
padding:10px;

`;
export const Option = styled.option`
`;
export const ButtonSubmit = styled.button`
width: 150px;
height:50px;
border-radius:5px;
border:none;
background: linear-gradient(120deg, rgb(0, 175, 239), rgb(163, 205, 77));

`;
export const ContainerSelect = styled.div`
justify-content:center;
display:flex;
margin-top:20px;
`;
export const ContainerTitle = styled.div`
justify-content:center;
display:flex;
`;
export const PTitle = styled.p`
font-size:30px;
margin:10px 0 0 0;
font-weight: light;
`;
export const ContainerContagem = styled.div``;