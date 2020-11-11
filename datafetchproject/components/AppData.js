import React from "react";
import FancyLoader from "../components/FancyLoader";

import UseFetch, { useFetch } from "../hooks/useFetchHook";

UseFetch.configure((config) => {
  config.baseUrl = "https://jsonplaceholder.typicode.com/";
  config.authentificationHeader = () => {
    return {
      Authorization: localStorage.getItem("id_token"),
    };
  };
  config.compressionTimeoutDelay = 200;
  config.maximumSize = 2 * 1024 * 1024;
  config.protectedFromCleaning = ["profile", /^patients\/importants/];
});

function AppData() {
  const [{ users, todos, posts }, isLoading] = useFetch((fetch) => ({
    todos: fetch("todos"), //the simple api endpoints could be called that way
    users: fetch("users"),
    posts: fetch("posts", {
      queryParams: { userId: "1", id: 2 },
    }), //the  api endpoints with query parameters could be called that way with infinite number of query parameters
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
