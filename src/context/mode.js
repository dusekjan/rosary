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

  const WITHINDEX = "withindex"
  const NOINDEX = "noindex"

  const [length, setLength] = useState(LONG);
  const [secrets, setSecrets] = useState(NOSECRETS);
  const [nightMode, setNightMode] = useState(NONIGHTMODE)
  const [autoScroll, setAutoScroll] = useState(CENTERSCROLL)
  const [withIndex, setWithIndex] = useState(WITHINDEX)

  useEffect(() => {
    const savedLength = localStorage.getItem("length");
    const savedSecrets = localStorage.getItem("secrets");
    const savedNightMode = localStorage.getItem("nightMode");
    const savedAutoScroll = localStorage.getItem("autoScroll");
    const savedWithIndex = localStorage.getItem("withIndex");

    [LONG, SHORT].includes(savedLength) && setLength(savedLength);
    [SECRETS, NOSECRETS].includes(savedSecrets) && setSecrets(savedSecrets);
    [NIGHTMODE, NONIGHTMODE].includes(savedNightMode) && setNightMode(savedNightMode);
    [NOSCROLL, STARTSCROLL, CENTERSCROLL, BOTTOMSCROLL].includes(savedAutoScroll) && setAutoScroll(savedAutoScroll);
    [NOINDEX, WITHINDEX].includes(savedWithIndex) && setWithIndex(savedWithIndex);
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
    } else if ([NOINDEX, WITHINDEX].includes(value)) {
      localStorage.setItem("withIndex", value)
      setWithIndex(value)
    }
  }

  const valueToShare = {
    length,
    secrets,
    nightMode,
    autoScroll,
    withIndex,
    setAndSaveMode,
    LONG,
    SHORT,
    SECRETS,
    NOSECRETS,
    NIGHTMODE,
    NONIGHTMODE,
    NOSCROLL,
    WITHINDEX,
    NOINDEX
  };

  return (
    <ModeContext.Provider value={valueToShare}>
      {children}
    </ModeContext.Provider>
  );
}

export { ModeProvider };
export default ModeContext;