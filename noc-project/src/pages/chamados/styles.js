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

export const Main = styled.main`
grid-area:m;
display:flex;
justify-content:center;
`;


