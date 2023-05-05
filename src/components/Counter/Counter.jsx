import React, { useContext } from "react";
import "./Counter.css";
import { CounterContext } from "../../context/CounterContext";

export const Counter = ({}) => {
  const { count, onIncrement } = useContext(CounterContext);
  console.log(count);
  return (
    <div>
      <p className="danger">
        Count <span>{count}</span>
      </p>

      {/* <button className="button" onClick={onDecrement}>
        -
      </button> */}
      <button className="button" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
