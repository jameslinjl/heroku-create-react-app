import React from "react";

const TodoListDisplay = ({ username, todoItems, todoItemsLoading }) => (
  <div>
    {username !== null && (
      <div style={{ position: "sticky", top: 0, alignSelf: "flex-start" }}>
        <h1>{`${username}'s List!`}</h1>
        {todoItemsLoading ? (
          <div>loading items...</div>
        ) : todoItems.length === 0 ? (
          <div>no items! :(</div>
        ) : (
          <ul>
            {todoItems.map(todoItem => (
              <li key={todoItem.id}>{todoItem.content}</li>
            ))}
          </ul>
        )}
      </div>
    )}
  </div>
);

export default TodoListDisplay;
