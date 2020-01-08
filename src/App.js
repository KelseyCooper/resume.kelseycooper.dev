import React from 'react';

import { Normalize } from 'styled-normalize';
import GlobalStyle from './styles/GlobalStyle';
import Console from './components/Console';
import Header from './components/Header';
import Footer from './components/Footer';
import * as S from './styles/components/App';

function App() {
  return (
    <S.App className="App">
      <Normalize />
      <GlobalStyle />
      <Header />
      <Console />
      <Footer />
    </S.App>
  );
}

export default App;
