import React, { useState } from "react";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
    </div>
  );
}
