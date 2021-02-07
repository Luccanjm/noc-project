import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Chamados from '../pages/chamados';
import FiltroChamado from '../components/filtroChamado';
import GerarPdf from '../components/gerarPdf';

// import PostChamado from '../components/postChamado';
// import Tecnico from '../components/mostrarTecnicos';
// import Sistema from '../components/mostrarSistemas';
// import ExibirChamados from '../components/mostrarChamados';




const Routes = () => (
<BrowserRouter>
<Switch>
<Route path="/" component={Dashboard} exact />
<Route path="/dashboard" component={Dashboard}/>
<Route path="/chamados" component={Chamados}/>
<Route path="/filtro" component={FiltroChamado}/>
<Route path="/pdf" component={GerarPdf}/>






</Switch>
</BrowserRouter>
);
export default Routes;