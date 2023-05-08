import { createContext, useReducer, useState } from "react";

const countReducer = (state, action) => {
  let value = { count: 0 };

  switch (action.type) {
    case "increment":
      value.count = state.count + 1;
      return value;

    case "decrement":
      state.count - 1 <= 0
        ? (value.count = 0)
        : (value.count = state.count - 1);
      return value;

    case "decrementBy":
      state.count - 10 <= 0
        ? (value.count = 0)
        : (value.count = state.count - 10);
      return value;

    case "incrementBy":
      value.count = state.count + 5;
      return value;

    case "reset":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

export const ContextCR = createContext();

export const ContextCRProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });

  const value = {
    count: state.count,
  };

  const onIncrement = () => {
    dispatch({ type: "increment" });
  };

  const onIncrementBy = () => {
    dispatch({ type: "incrementBy" });
  };

  const onDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const onDecrementBy = () => {
    dispatch({ type: "decrementBy" });
  };

  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <ContextCR.Provider
      value={{
        value,
        onIncrement,
        onIncrementBy,
        onDecrement,
        onDecrementBy,
        reset,
      }}
    >
      {children}
    </ContextCR.Provider>
  );
};
