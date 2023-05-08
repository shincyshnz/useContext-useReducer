import React, { useContext, useReducer, useState } from "react";
import "./Counter.css";
import { countReducer } from "./countReducer";

export const CounterUseReducer = ({}) => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <>
      <div className="reduce-container">
        <div className="counter-container">
          <button
            className="button"
            onClick={() => dispatch({ type: "decrement" })}
          >
            -
          </button>
          <span className="count">
            <span>{state.count}</span>
          </span>
          <button
            className="button"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>
        </div>
        <div className="button">
          <button
            className=""
            onClick={() => dispatch({ type: "decrementBy" })}
          >
            -10
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
          <button
            className="button"
            onClick={() => dispatch({ type: "incrementBy" })}
          >
            +5
          </button>
        </div>
      </div>
    </>
  );
};
