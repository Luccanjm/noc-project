import styled from 'styled-components';
import {logoBranco, dropdownNav} from './index';

export const ContainerGeral = styled.div`
display:grid;
grid-gap: 0.6rem;
grid-template-rows:10 vh 85vh 5vh;
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
background: #c4c4cc;
.numero {
    display: block;
    width: 50%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

}

 


`;
export const Footer = styled.footer`
grid-area:f;
text-align:center;
`;
// export const 

