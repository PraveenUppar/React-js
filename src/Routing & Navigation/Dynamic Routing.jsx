import { useParams, useNavigate } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/users");
  };

  return (
    <div>
      <h1>User Profile: {userId}</h1>
      <button onClick={handleBack}>Back to Users</button>
    </div>
  );
}

// In App component:
<Route path="/user/:userId" element={<UserProfile />} />;
