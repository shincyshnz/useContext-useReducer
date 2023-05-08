import "./App.css";
import { CounterCR } from "./components/Counter/CounterCR";
import { CounterUseContext } from "./components/Counter/CounterUseContext";
import { CounterUseReducer } from "./components/Counter/CounterUseReduce";

function App() {
  return (
    <>
      <h1>Counter</h1>
      <div className="box-container">
        <div className="box">
          <h2>Context API </h2>
          <CounterUseContext />
        </div>
        <div className="box">
          <h2>Use Reducer </h2>
          <CounterUseReducer />
        </div>
        <div className="box">
          <h2>Use Context + Use Reducer </h2>
          <CounterCR />
        </div>
      </div>
    </>
  );
}

export default App;
