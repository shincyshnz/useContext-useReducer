import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { CounterUseReducer } from "./components/Counter/CounterUseReduce";

function App() {
  return (
    <>
      <h1>Counter</h1>
      <div className="box-container">
        <div className="box">
          <h2>Context API </h2>
          <Counter />
        </div>
        <div className="box">
          <h2>Use Reducer </h2>
          <CounterUseReducer />
        </div>
      </div>
    </>
  );
}

export default App;
