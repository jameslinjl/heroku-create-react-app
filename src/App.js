import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./UsersList";
import TodoListDisplay from "./TodoListDisplay";

const App = () => {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [todoItemsLoading, setTodoItemsLoading] = useState(false);
  const [userToDisplay, setUserToDisplay] = useState(null);
  const [todoItemsToDisplay, setTodoItemsToDisplay] = useState([]);

  useEffect(() => {
    setUsersLoading(true);
    axios.get("/api/user").then(response => {
      setUsers(response.data);
      setUsersLoading(false);
    });
  }, []);

  return (
    <div>
      {usersLoading ? (
        <div>loading...</div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <UsersList
            users={users}
            setUserToDisplay={setUserToDisplay}
            setTodoItemsToDisplay={setTodoItemsToDisplay}
            setTodoItemsLoading={setTodoItemsLoading}
          />
          <TodoListDisplay
            username={userToDisplay}
            todoItems={todoItemsToDisplay}
            todoItemsLoading={todoItemsLoading}
          />
        </div>
      )}
    </div>
  );
};

export default App;
