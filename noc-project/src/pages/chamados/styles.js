import styled from 'styled-components';

export const ContainerGeral = styled.div`
display:grid;
grid-gap: 0.6rem;
grid-template-rows:10vh 85vh 5vh;
grid-template-column: 1fr 1fr 1fr;
grid-template-areas: "h h h" 
                     "m m m"
                     "f f f" ;


`;
export const Header = styled.header`
grid-area:h;
background: linear-gradient(120deg, rgb(0, 175, 239), rgb(163, 205, 77));
display:flex;
img{
    width:100px;
    margin-left:20%;
}
.nav-item{
    margin-left:50px;
    margin-top:1%;
    
}
ul{
	display: flex;
    align-items: center;
    gap:30px;
}
li:first-child{
    margin-left:90px;
}
li:last-child{

}
ul li{
list-style: none;
margin: 0;
padding: 0;


}
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
export const Footer = styled.footer`
grid-area:f;
text-align:center;
`;
// export const 

