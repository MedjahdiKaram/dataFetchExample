import React from "react";
import FancyLoader from "../components/FancyLoader";

import UseFetch, { useFetch } from "../hooks/useFetchHook";
/**
 * The call  to the configuration instance like it has been describe in the test requirements
 *
 */
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

/**
 * AppData Component that consume useFetch hook to fetch the data from an endpoint.
 * This slice of code is a the call that could be replaced by patients and cancerOrigin given in the test requirement
 * The fancyLoader is displayed once the data ins still loading. Here only the users list is displayed
 */
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
