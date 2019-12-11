import React from 'react'

import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

// HISTORY
import history from './history';

import Home from '../Pages/Home/Home';
import Contato from '../Pages/Contato/Contato';
import PedidosChat from '../Pages/Pedidos/Pedidos-chat';
import NotFound from '../Pages/NotFound/NotFound';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/cardapio' component={Home} />
            <Route path='/contato' component={Contato} />
            <Route path='/pedidos' component={PedidosChat} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)
export default Routes;
//