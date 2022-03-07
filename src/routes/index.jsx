import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import GlobalStyles from '../GlobalStyles';

function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
