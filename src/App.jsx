import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const [removeAmount, setRemoveAmount] = useState(0);

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">Redux Toolkit Counter</h1>
        <p className="subtitle">Mini project with clean UI ✨</p>

        <div className="countBox">
          <span className="countText">{count}</span>
          <span className="countLabel">Current Count</span>
        </div>

        <div className="btnGroup">
          <button className="btn primary" onClick={() => dispatch(increment())}>
            + Increment
          </button>

          <button className="btn danger" onClick={() => dispatch(decrement())}>
            - Decrement
          </button>

          <button className="btn gray" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>

        <div className="formSection">
          <div className="inputBox">
            <label>Add Amount</label>
            <div className="inputRow">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
              <button
                className="btn small primary"
                onClick={() => dispatch(incrementByAmount(amount))}
              >
                Add
              </button>
            </div>
          </div>

          <div className="inputBox">
            <label>Remove Amount</label>
            <div className="inputRow">
              <input
                type="number"
                value={removeAmount}
                onChange={(e) => setRemoveAmount(Number(e.target.value))}
              />
              <button
                className="btn small danger"
                onClick={() => dispatch(decrementByAmount(removeAmount))}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <p className="footerText">Made with ❤️ using Redux Toolkit</p>
      </div>
    </div>
  );
}

export default App;
