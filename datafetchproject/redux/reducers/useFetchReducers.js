import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
} from "../actions/useFetchActions";

const theState = { data: "" };
export default function fetchDataReducer(state = theState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      localStorage.setItem(
        "data",
        JSON.stringify({ ...state.data, ...action.payload.data })
      );
      return {
        data: { ...state.data, ...action.payload.data },
        loading: false,
      };

    case FETCH_DATA_BEGIN:
      const localStrageData = localStorage.getItem("data");
      const init = localStrageData
        ? { data: JSON.parse(localStrageData), loading: true, error: null }
        : theState;
      return init;

    default:
      return state;
  }
}
