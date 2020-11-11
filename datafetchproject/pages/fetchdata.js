import { createStore } from "redux";
import { Provider } from "react-redux";
import fetchDataReducer from "../redux/reducers/useFetchReducers";
import UseFetch, { useFetch } from "../hooks/useFetchHook";
import AppData from "../components/AppData";

let store = createStore(fetchDataReducer);

export default function fetchdata() {
  return (
    <Provider store={store}>
      <h1>Let's fech some data</h1>
      <AppData></AppData>
    </Provider>
  );
}
