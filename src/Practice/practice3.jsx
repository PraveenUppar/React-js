import { useState } from "react";

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Avocado",
    "Blueberry",
    "Cherry",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto" }}>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                marginBottom: "5px",
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <p>No fruits found</p>
        )}
      </ul>

      <p>
        Results: {filteredItems.length} out of {items.length}
      </p>
    </div>
  );
}

export default SearchFilter;
