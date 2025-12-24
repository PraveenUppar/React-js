import { useState, useEffect } from "react";

function PaginatedPosts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    const start = (currentPage - 1) * itemsPerPage + 1;

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${
        start - 1
      }&_limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, [currentPage]);

  const totalPages = Math.ceil(100 / itemsPerPage); // API has 100 posts

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      {loading && <p>Loading...</p>}

      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PaginatedPosts;
