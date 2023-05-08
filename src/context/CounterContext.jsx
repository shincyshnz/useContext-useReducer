import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    count > 9 ? setCount(0) : setCount((prev) => (prev += 1));
  };

  const onDecrement = () => {
    count < 1 ? setCount(0) : setCount((prev) => (prev -= 1));
  };
  return (
    <CounterContext.Provider value={{ count, onIncrement, onDecrement }}>
      {children}
    </CounterContext.Provider>
  );
};
