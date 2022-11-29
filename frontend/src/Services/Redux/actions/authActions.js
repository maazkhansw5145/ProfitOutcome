import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_AUTH_MSG,
} from "../Types";

import { returnErrors } from "./errorActions";
import url from "../../../Config/URL";

export const login = (data) => (dispatch) => {
  // fetch(`${url}/login`, {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.msg === "Login Successfully") {
  //       dispatch({
  //         type: LOGIN_SUCCESS,
  //         payload: data,
  //       });
  //     } else {
  //       dispatch(returnErrors(data.error));
  //       dispatch({
  //         type: LOGIN_FAIL,
  //       });
  //     }
  //   });
  console.log(data);
  if (data.loginId === "logmein@discord.com" && data.password === "password") {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
  } else {
    dispatch(returnErrors("Wrong credentials"));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const clearAuthMsg = () => async (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_MSG,
  });
};
