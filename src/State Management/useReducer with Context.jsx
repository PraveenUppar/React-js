import { createContext, useReducer, useContext } from "react";

const AppContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.payload }],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, { todos: [] });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

function useApp() {
  return useContext(AppContext);
}

// Using in a component
function TodoList() {
  const { state, dispatch } = useApp();

  return (
    <div>
      {state.todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
