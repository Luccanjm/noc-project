import styled from 'styled-components';

export const ContainerGeral = styled.div`
display:grid;
grid-gap: 0.6rem;
grid-template-rows:10vh auto 5vh;
grid-template-column: 1fr 1fr 1fr;
grid-template-areas: "h h h" 
                     "m m m"
                     "f f f" ;


`;
export const Header = styled.header`
grid-area:h;
background: linear-gradient(120deg, rgb(0, 175, 239), rgb(163, 205, 77));

img{
    width:100px;
    margin-left:calc((5 / 16) * 100%);
}
.nav-item{
    margin-top:1%;
    
}


`;
export const Lista = styled.ul`
    display:flex;
    overflow: hidden;
    align-items: center;
    gap:30px;
    list-style-type: none;

li:first-child{
    margin-left:calc((1 / 16) * 100%);

    }
    a:hover{
        color: green; 
        text-decoration:none;
    } 
`;

export const LinhaLista = styled.li`
`;

export const Button = styled.button`
width: 150px;
height:50px;
border-radius:5px;
border:none;
background: #a3cd4d;
`;

export const LinkLista = styled.a`
    text-decoration:none;
    color:white;

`;
export const ContainerImg = styled.div`
`;
export const Main = styled.main`
grid-area:m;
`;
export const ContainerTable = styled.div`
display:flex;
justify-content:center;

`;


