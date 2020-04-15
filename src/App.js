import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./UserList";
import UserProfile from "./UserProfile";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/user").then(({ data }) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={"/"} exact={true}>
            <UserList users={users} isLoading={isLoading} />
          </Route>
          <Route path={"/user/:id"}>
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
