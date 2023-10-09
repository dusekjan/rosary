import {createContext, useEffect, useState} from 'react';

const ModeContext = createContext();

function ModeProvider({ children }) {
  const LONG = "long"
  const SHORT = "short"
  const SECRETS = "secrets"
  const NOSECRETS = "nosecrets"
  const NIGHTMODE = "nightmode"
  const NONIGHTMODE = "nonightmode"

  const NOSCROLL = "noscroll"
  const STARTSCROLL = "start"
  const CENTERSCROLL = "center"
  const BOTTOMSCROLL = "end"

  const [length, setLength] = useState(LONG);
  const [secrets, setSecrets] = useState(NOSECRETS);
  const [nightMode, setNightMode] = useState(NONIGHTMODE)
  const [autoScroll, setAutoScroll] = useState(CENTERSCROLL)

  useEffect(() => {
    const savedLength = localStorage.getItem("length");
    const savedSecrets = localStorage.getItem("secrets");
    const savedNightMode = localStorage.getItem("nightMode");
    const savedAutoScroll = localStorage.getItem("autoScroll");

    [LONG, SHORT].includes(savedLength) && setLength(savedLength);
    [SECRETS, NOSECRETS].includes(savedSecrets) && setSecrets(savedSecrets);
    [NIGHTMODE, NONIGHTMODE].includes(savedNightMode) && setNightMode(savedNightMode);
    [NOSCROLL, STARTSCROLL, CENTERSCROLL, BOTTOMSCROLL].includes(savedAutoScroll) && setAutoScroll(savedAutoScroll);
  }, [])

  const setAndSaveMode = (value) => {
    if ([LONG, SHORT].includes(value)) {
      localStorage.setItem("length", value)
      setLength(value)
    } else if ([SECRETS, NOSECRETS].includes(value)) {
      localStorage.setItem("secrets", value)
      setSecrets(value)
    } else if ([NIGHTMODE, NONIGHTMODE].includes(value)) {
      localStorage.setItem("nightMode", value)
      setNightMode(value)
    } else if ([NOSCROLL, STARTSCROLL, CENTERSCROLL, BOTTOMSCROLL].includes(value)) {
      localStorage.setItem("autoScroll", value)
      setAutoScroll(value)
    }
  }

  const valueToShare = {
    length,
    secrets,
    nightMode,
    autoScroll,
    setAndSaveMode,
    LONG,
    SHORT,
    SECRETS,
    NOSECRETS,
    NIGHTMODE,
    NONIGHTMODE,
    NOSCROLL
  };

  return (
    <ModeContext.Provider value={valueToShare}>
      {children}
    </ModeContext.Provider>
  );
}

export { ModeProvider };
export default ModeContext;