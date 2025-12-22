import React, { useState, useEffect } from "react";

export default function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //   using fetch
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("...");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  //   using axios
  useEffect(() => {
    axios
      .get("https://api.example.com/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
