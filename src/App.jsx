import State from "./React Fundamentals/state and events.jsx";
import UserCard from "./React Fundamentals/userCard.jsx";
import Toggle from "./React Fundamentals/Tooglebutton.jsx";

function App() {
  return (
    <div>
      <State />
      <UserCard name="John" email="john@example.com" age={28} />
      <Toggle />
    </div>
  );
}

export default App;
