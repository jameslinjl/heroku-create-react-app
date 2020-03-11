import React from "react";
import axios from "axios";

const UsersList = ({
  users,
  setUserToDisplay,
  setTodoItemsToDisplay,
  setTodoItemsLoading
}) => (
  <div>
    {users.length === 0 ? (
      <div>No users!</div>
    ) : (
      <ul>
        {users.map(user => {
          const onClick = () => {
            setUserToDisplay(user.username);
            setTodoItemsLoading(true);
            axios
              .post("/api/auth", { username: user.username })
              .then(response => {
                return axios.get("/api/todo-item", {
                  headers: { authorization: response.data.token }
                });
              })
              .then(response => {
                setTodoItemsToDisplay(response.data);
                setTodoItemsLoading(false);
              })
              .catch(err => {
                setTodoItemsToDisplay([]);
                setTodoItemsLoading(false);
              });
          };
          return (
            <li key={user.id} onClick={onClick}>
              {user.username}
            </li>
          );
        })}
      </ul>
    )}
  </div>
);

export default UsersList;
