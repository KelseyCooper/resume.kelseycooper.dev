import React from 'react';

import * as S from '../styles/components/MiniConsole';

function MiniConsole({text, clickAction, positionFixed}) {
  return (
    <S.MiniConsole
      onClick={clickAction}
      positionFixed={positionFixed}
    >
      <S.MiniConsoleHeader />
      {text && (
        <S.MiniConsoleInner>
          <p>{text}</p>
        </S.MiniConsoleInner>
      )}
    </S.MiniConsole>
  )
};

export default MiniConsole;