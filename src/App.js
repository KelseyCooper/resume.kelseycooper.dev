import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { isAndroid } from 'react-device-detect';

import { Normalize } from 'styled-normalize';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import Resume from './pages/Resume';
import * as S from './styles/App';

function App() {
  return (
    <S.App className="App">
      <Router>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route exact path="/">
            {isAndroid ? <Resume hideReturnButton={true} /> : <Home />}
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
        </Switch>
      </Router>
    </S.App>
  );
}

export default App;
