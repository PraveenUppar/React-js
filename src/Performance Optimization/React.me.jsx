const UserCard = React.memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});

// Component only re-renders if 'user' prop changes
