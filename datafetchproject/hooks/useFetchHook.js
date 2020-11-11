import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import querystring from "querystring";
import {
  fetchDataBegin,
  fetchDataSuccess,
} from "../redux/actions/useFetchActions";

export const UseFetch = {
  config: {},
  configure: function (configParam) {
    configParam(this.config);
  },
};

export const useFetch = (fetchInput = null) => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state);
  function getData(endpoint, options = "") {
    const { queryParams } = options;
    const queryParamsString = queryParams
      ? "?" + querystring.stringify(queryParams) //add '?' if the query parameters exist
      : ""; //nothing to be added if the query parameters are not defined
    dispatch(fetchDataBegin());

    fetch(UseFetch.config.baseUrl + endpoint + queryParamsString)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchDataSuccess({ [endpoint]: json }));
      });
  }

  useEffect(() => {
    fetchInput(getData);
  }, []);

  return [{ ...message.data }, message.loading];
};
export default UseFetch;
