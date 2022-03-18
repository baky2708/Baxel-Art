import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import Draw from '../pages/Draw';
import Gallery from '../pages/Gallery';
import ResetCss from '../GlobalStyles/ResetCss';
import GlobalStyles from '../GlobalStyles';

function Routes() {
  return (
    <BrowserRouter>
      <ResetCss />
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/draw" exact component={Draw} />
        <Route path="/gallery" exact component={Gallery} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
