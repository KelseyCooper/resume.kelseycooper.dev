import React from 'react';

import close from '../close.svg';
import minimize from '../minimize.svg';
import expand from '../expand.svg';
import * as S from '../styles/components/ConsoleHeader';

function ConsoleHeader({
    onCloseConsole,
    onToggleMinimizeConsole,
    onToggleExpandConsole
  }) {
  const closeConsole = () => {
    onCloseConsole();
  }

  const minimizeConsole = () => {
    onToggleMinimizeConsole();
  }

  const expandConsole = () => {
    onToggleExpandConsole();
  }

  return (
    <S.ConsoleHeader>
      <S.ConsoleHeaderActions>
        <S.ConsoleClose onClick={closeConsole}>
          <img src={close} alt="Close" />
        </S.ConsoleClose>
        <S.ConsoleMinimize onClick={minimizeConsole}>
          <img src={minimize} alt="Minimize" />
        </S.ConsoleMinimize>
        <S.ConsoleExpand onClick={expandConsole}>
          <img src={expand} alt="Expand" />
        </S.ConsoleExpand>
      </S.ConsoleHeaderActions>
    </S.ConsoleHeader>
  )
}

export default ConsoleHeader;