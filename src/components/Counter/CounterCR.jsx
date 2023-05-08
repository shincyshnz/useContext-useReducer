import React, { useContext } from "react";
import "./Counter.css";
import { ContextCR } from "../../context/ContextCR";

export const CounterCR = () => {
  const {
    value,
    onIncrement,
    onDecrement,
    onIncrementBy,
    onDecrementBy,
    reset,
  } = useContext(ContextCR);

  return (
    <>
      <div className="reduce-container">
        <div className="counter-container">
          <button className="button" onClick={onDecrement}>
            -
          </button>
          <span className="count">
            <span>{value.count}</span>
          </span>
          <button className="button" onClick={onIncrement}>
            +
          </button>
        </div>
        <div className="button">
          <button className="" onClick={onDecrementBy}>
            -10
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
          <button className="button" onClick={onIncrementBy}>
            +5
          </button>
        </div>
      </div>
    </>
  );
};
