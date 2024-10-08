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
    gap:10px;
    list-style-type: none;

li:first-child{
    margin-left:calc((1 / 16) * 100%);

    }
   
    button:hover{
        background:rgb(175,203,08);
        height:60px;
        width:200px;
    }
`;

export const LinhaLista = styled.li`
`;

export const Button = styled.button`
    width: auto;
    height:40px;
    border-radius:5px;
    border:none;
    background: #28a745;
    max-width:250px;
    min-width:180px;
    margin: 0 20px;
    margin-bottom: 10px;
    margin-top:20px;
    transition: 0.5s;
    a:hover{
        color:#fff;
        text-decoration:none;
    } 
`;

export const LinkLista = styled.a`
    text-decoration:none;
    color: #fff;
`;
export const ContainerImg = styled.div`

`;