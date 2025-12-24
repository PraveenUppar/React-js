function Card({ title = "Default Title", subtitle, children }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "20px", margin: "10px" }}>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      <div>{children}</div>
    </div>
  );
}

// Usage with children
<Card title="Welcome" subtitle="This is a card">
  <p>Card content goes here</p>
</Card>;
