import React                            from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login           from './pages/login/index';
import Register        from './pages/register/index';
import RegisterSuccess from './pages/register-success/index';
import Dashboard       from './pages/dashboard/index';
import Investments     from './pages/investments/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"           exact component={Login} />
                <Route path="/register"         component={Register} />
                <Route path="/register-success" component={RegisterSuccess} />
                <Route path="/dashboard"        component={Dashboard} />
                <Route path="/investments"      component={Investments} />
            </Switch>
        </BrowserRouter>
    );
}