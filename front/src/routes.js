import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return (
        // garante que somente uma rota será acessada atraves da URL
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" exact component={New} />
        </Switch>
    );
}

export default Routes;