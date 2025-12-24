import { useReducer } from "react";

const initialState = {
  count: 0,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        history: [...state.history, state.count + 1],
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
        history: [...state.history, state.count - 1],
      };
    case "RESET":
      return initialState;
    case "CLEAR_HISTORY":
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
}

function CounterWithHistory() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "CLEAR_HISTORY" })}>
        Clear History
      </button>

      <h3>History</h3>
      <ul>
        {state.history.map((count, index) => (
          <li key={index}>{count}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterWithHistory;
