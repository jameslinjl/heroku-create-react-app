import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ isLoading, users }) => {
  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.username}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default UserList;
