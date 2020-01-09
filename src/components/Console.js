import React, { useState } from 'react';

import ConsoleHeader from './ConsoleHeader';
import ConsoleInner from './ConsoleInner';
import MiniConsole from './MiniConsole';
import * as S from '../styles/components/Console';

function Console() {
  const [consoleOpen, setConsoleOpen] = useState(true);
  const [consoleMinimized, setConsoleMinimized] = useState(false);
  const [consoleExpanded, setConsoleExpanded] = useState(false);

  const closeConsole = () => {
    setConsoleOpen(false);
  }

  const openConsole = () => {
    setConsoleOpen(true);
    setConsoleMinimized(false);
    setConsoleExpanded(false);
  }

  const toggleMinimizeConsole = () => {
    setConsoleMinimized(!consoleMinimized);
  }

  const toggleExpandConsole = () => {
    setConsoleExpanded(!consoleExpanded);
  }

  return (
    <>
    {consoleOpen ? (
      <S.Console
        consoleMinimized={consoleMinimized}
        consoleExpanded={consoleExpanded}
      >
        <ConsoleHeader
          onCloseConsole={closeConsole}
          onToggleMinimizeConsole={toggleMinimizeConsole}
          onToggleExpandConsole={toggleExpandConsole}
        />
        <ConsoleInner />
      </S.Console>
    ) : (
      <S.ConsoleClosed>
        <p>why would you do that!?</p>
        <MiniConsole
          clickAction={openConsole}
          text=">Open"
        />
      </S.ConsoleClosed>
    )}
    </>

  )
}

export default Console;