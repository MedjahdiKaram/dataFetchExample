import React from "react";
import FancyLoader from "../components/FancyLoader";

import { useFetch } from "../hooks/useFetchHook";
function AppData() {
  const [{ users, todos, posts }, isLoading] = useFetch((fetch) => ({
    todos: fetch("todos"),
    users: fetch("users"),
    posts: fetch("posts", {
      queryParams: { userId: "1", id: 2 },
    }),
  }));

  const usersList = users ? users.map((u) => <li key={u.id}>{u.name}</li>) : "";

  return (
    <div className="App">
      {isLoading && <FancyLoader />}
      {<ul>{usersList}</ul>}
    </div>
  );
}

export default AppData;
