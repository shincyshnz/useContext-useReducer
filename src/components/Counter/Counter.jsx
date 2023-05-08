import React, { useContext } from "react";
import "./Counter.css";
import { CounterContext } from "../../context/CounterContext";

export const Counter = ({}) => {
  const { count, onIncrement, onDecrement } = useContext(CounterContext);

  return (
    <div className="counter-container">
      <button className="button" onClick={onDecrement}>
        -
      </button>{" "}
      <span className="count">
        <span>{count}</span>
      </span>
      <button className="button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
