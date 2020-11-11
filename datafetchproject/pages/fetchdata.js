import { createStore } from "redux";
import { Provider } from "react-redux";
import fetchDataReducer from "../redux/reducers/useFetchReducers";
import UseFetch, { useFetch } from "../hooks/useFetchHook";
import AppData from "../components/AppData";

let store = createStore(fetchDataReducer);
UseFetch.configure((config) => {
  config.baseUrl = "https://jsonplaceholder.typicode.com/";
  config.authentificationHeader = () => {
    return {
      Authorization: localStorage.getItem("id_token"),
    };
  };
  config.compressionTimeoutDelay = 200;
  config.maximumSize = 2 * 1024 * 1024; // 2Mb.
  config.protectedFromCleaning = ["profile", /^patients\/importants/];
});
export default function fetchdata() {
  return (
    <Provider store={store}>
      <h1>Let's fech some data</h1>
      <AppData></AppData>
    </Provider>
  );
}
