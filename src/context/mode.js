import {createContext, useEffect, useState} from 'react';

const ModeContext = createContext();

function ModeProvider({ children }) {
  const LONG = "long"
  const SHORT = "short"
  const SECRETS = "secrets"
  const NOSECRETS = "nosecrets"
  const [length, setLength] = useState(LONG);
  const [secrets, setSecrets] = useState(NOSECRETS);

  useEffect(() => {
    const savedLength = localStorage.getItem("length");
    const savedSecrets = localStorage.getItem("secrets");

    [LONG, SHORT].includes(savedLength) && setLength(savedLength);
    [SECRETS, NOSECRETS].includes(savedSecrets) && setSecrets(savedSecrets);
  }, [])

  const setAndSaveMode = (value) => {
    if ([LONG, SHORT].includes(value)) {
      localStorage.setItem("length", value)
      setLength(value)
    } else if ([SECRETS, NOSECRETS].includes(value)) {
      localStorage.setItem("secrets", value)
      setSecrets(value)
    }
  }

  const valueToShare = {
    length,
    secrets,
    setAndSaveMode,
    LONG,
    SHORT,
    SECRETS,
    NOSECRETS
  };

  return (
    <ModeContext.Provider value={valueToShare}>
      {children}
    </ModeContext.Provider>
  );
}

export { ModeProvider };
export default ModeContext;