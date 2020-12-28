import React                            from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login           from './pages/login/index';
import Register        from './pages/register/index';
import RegisterSuccess from './pages/register-success/index';
import Dashboard       from './pages/dashboard/index';
import Investments     from './pages/investments/index';
import Reports         from './pages/reports/index';
import Budget          from './pages/budget/index';
import Expenses        from './pages/expenses/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/"           exact component={Login} />
                <Route path="/register"         component={Register} />
                <Route path="/register-success" component={RegisterSuccess} />
                <Route path="/dashboard"        component={Dashboard} />
                <Route path="/investments"      component={Investments} />
                <Route path="/reports"          component={Reports} />
                <Route path="/budget"           component={Budget} />
                <Route path="/expenses"         component={Expenses} />
            </Switch>
        </BrowserRouter>
    );
}