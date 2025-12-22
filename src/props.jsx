// Functional Components

// child
export default function Greeting({ name, age }) {
  return (
    <h1>
      Hello, {name}, age {age}
    </h1>
  );
}

// parent
<Greeting name="Alice" age={25} />;
