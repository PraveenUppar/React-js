export default function UserCard(props) {
  const handleClick = () => {
    alert(`Name: ${props.name}, Email: ${props.email}, Age: ${props.age}`);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2>{props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
      <button onClick={handleClick}>View Details</button>
    </div>
  );
}
