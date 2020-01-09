import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

import * as S from '../styles/components/ConsoleInner';
import * as CommandResponse from '../content/CommandResponse';

function ConsoleInner() {
  const terminalPrefix = 'resume > '
  const [terminalInput, setTerminalInput] = useState(terminalPrefix);
  const [terminalHistory, seTerminalHistory] = useState([]);
  const consoleRef = useRef(null);
  const consoleInputRef = useRef(null);
  const history = useHistory();

  useEffect(() => {
    focusConsoleInput();
  }, []);

  useEffect(() => {
    consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
  })

  const handleKeyPress = event => {
    const key = event.key;
    const value = event.target.value;

    if (key === 'Enter') {
      setTerminalInput(terminalPrefix);
      seTerminalHistory(oldHistory => [...oldHistory, {__html: `<p>${value}</p>`}]);

      switch(value) {
        case terminalPrefix + 'clear':
          seTerminalHistory([]);
          break;
        case terminalPrefix + 'help':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: CommandResponse.help}]);
          break;
        case terminalPrefix + 'about':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: CommandResponse.about}]);
          break;
        case terminalPrefix + 'hire':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: CommandResponse.hire}]);
          break;
        case terminalPrefix + 'experience':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: CommandResponse.experience}]);
          break;
        case terminalPrefix + 'education':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: CommandResponse.education}]);
          break;
        case terminalPrefix + 'projects':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: CommandResponse.projects}]);
          break;
        case terminalPrefix + 'skills':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: CommandResponse.skills}]);
          break;
        case terminalPrefix + 'pretty':
          history.push("/resume");
          break;
        case terminalPrefix + 'ls':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: `<p>This isn't a normal console!</p>`}]);
          break;
        case terminalPrefix + 'pwd':
          seTerminalHistory(oldHistory => [...oldHistory, {__html: `<p>/Users/KelseyCooper/resume</p>`}]);
          break;
        case terminalPrefix:
          break;
        default:
          seTerminalHistory(oldHistory => [...oldHistory, {__html: `<p>Unknown command, type 'help' for all commands</p>`}]);
      }
      return;
    }

    setTerminalInput(terminalInput + event.key);
  }

  const handleBackSpace = event => {
    // Check if backspace has been pressed
    if (event.keyCode === 8 && event.target.value !== terminalPrefix) {
      setTerminalInput(terminalInput.slice(0, -1));
    }
  }

  const focusConsoleInput = () => {
    consoleInputRef.current.focus();
    consoleInputRef.current.setSelectionRange(-1, -1);
  }

  return(
    <S.ConsoleInner
      onClick={focusConsoleInput}
      ref={consoleRef}
    >
      {terminalHistory.map((historyElement, index) => {
        return <div key={index} dangerouslySetInnerHTML={historyElement} />
      }
      )}
      <S.ConsoleInput
        ref={consoleInputRef}
        value={terminalInput}
        onKeyPress={handleKeyPress}
        onKeyDown={handleBackSpace}
        spellCheck="false"
      />
    </S.ConsoleInner>
  )
}

export default ConsoleInner;