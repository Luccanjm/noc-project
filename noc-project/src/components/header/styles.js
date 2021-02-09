import styled from 'styled-components';

export const Head = styled.header`
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
    overflow: inherit;
    align-items: center;
    gap:30px;
    list-style-type: none;

li:first-child{
    margin-left:calc((1 / 16) * 100%);

    }
    a:hover{
        color: #145E7D; 
        text-decoration:none;
    } 
    .btn-success{
        background-color: rgb(0, 175, 239);
        border:none;

    }
    .btn-success:not(:disabled):not(.disabled).active, .btn-success:not(:disabled):not(.disabled):active, .show>.btn-success.dropdown-toggle{
        background-color: rgb(0, 175, 239);
        border:none;
    }
    .dropdown-menu[x-placement^=bottom], .dropdown-menu[x-placement^=left], .dropdown-menu[x-placement^=right], .dropdown-menu[x-placement^=top]{
        background-color: rgb(0, 175, 239);
        border:none;
        color:#fff;
    }
    .dropdown-item:focus, .dropdown-item:hover{
        background-color: rgb(0, 175, 239);
        border:none;
        color:#fff;
    }
`;

export const LinhaLista = styled.li`
`;

export const Button = styled.button`
width: 150px;
 height:40px;
border-radius:5px;
border:none;
background: #28a745;
// max-width:150px;
margin: 0 50px;
margin-bottom: 10px;
`;

export const LinkLista = styled.a`
    text-decoration:none;
    color: #fff;
`;
export const ContainerImg = styled.div`

`;