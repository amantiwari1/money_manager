import axios from "axios";
import { ChangeExample } from "../reducers/ExampleSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { BASE_URL } from "../shared/constants";

const exampleActionCreator = {
  changeExample: (text: string) => async (dispatch: Dispatch) => {
    await axios
      .get(`${BASE_URL}/example`)
      .then((res) => {
        dispatch(ChangeExample(res.data.text));
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export default exampleActionCreator;
