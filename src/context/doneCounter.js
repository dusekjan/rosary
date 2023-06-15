import { createContext, useState } from 'react';

const DoneCounterContext = createContext();

function DoneCounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    setCounter(counter - 1)
  }

  const valueToShare = {
    counter,
    setCounter,
    incrementCounter,
    decrementCounter
  };

  return (
    <DoneCounterContext.Provider value={valueToShare}>
      {children}
    </DoneCounterContext.Provider>
  );
}

export { DoneCounterProvider };
export default DoneCounterContext;