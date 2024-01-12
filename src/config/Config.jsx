import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApiCrud, getApiData } from "../store/reducers/MainReducers";
import axios from "axios";

function Config() {
  const dispatch = useDispatch();
  const apiGet = async () => {
    try {
      const apiData = await axios.get("http://localhost:8000/data");
      const apiCrud = await axios.get("http://localhost:8000/crud");
      dispatch(getApiData(apiData.data));
      dispatch(getApiCrud(apiCrud.data));
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  };
  useEffect(() => {
    apiGet();
  }, [dispatch]);
}

export default Config;
