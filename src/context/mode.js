import {createContext, useEffect, useState} from 'react';

const ModeContext = createContext();

function ModeProvider({ children }) {
  const LONG = "long"
  const SHORT = "short"
  const SECRETS = "secrets"
  const NOSECRETS = "nosecrets"
  const NIGHTMODE = "nightmode"
  const NONIGHTMODE = "nonightmode"
  const [length, setLength] = useState(LONG);
  const [secrets, setSecrets] = useState(NOSECRETS);
  const [nightMode, setNightMode] = useState(NONIGHTMODE)

  useEffect(() => {
    const savedLength = localStorage.getItem("length");
    const savedSecrets = localStorage.getItem("secrets");
    const savedNightMode = localStorage.getItem("nightMode");

    [LONG, SHORT].includes(savedLength) && setLength(savedLength);
    [SECRETS, NOSECRETS].includes(savedSecrets) && setSecrets(savedSecrets);
    [NIGHTMODE, NONIGHTMODE].includes(savedNightMode) && setNightMode(savedNightMode);
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
    }
  }

  const valueToShare = {
    length,
    secrets,
    nightMode,
    setAndSaveMode,
    LONG,
    SHORT,
    SECRETS,
    NOSECRETS,
    NIGHTMODE,
    NONIGHTMODE
  };

  return (
    <ModeContext.Provider value={valueToShare}>
      {children}
    </ModeContext.Provider>
  );
}

export { ModeProvider };
export default ModeContext;