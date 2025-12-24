// useFetch.js - Custom Hook
import { useState, useEffect } from "react";

export default function fetchFunction(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Using the custom hook
function App() {
  // object destructiion by paaing url as paramaeter
  const { data, loading, error } = fetchFunction(
    "https://api.example.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data && <p>{data.name}</p>}</div>;
}
