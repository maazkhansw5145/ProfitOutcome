import { LOGIN_SUCCESS, LOGOUT_SUCCESS, CLEAR_AUTH_MSG } from "../Types";
import url from "../../../Config/URL";

export const login = (data) => (dispatch) => {
  console.log("data", data);
  fetch(`${url}/user/check/${data.email}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log("RES", res);
    if (res.code === 404) {
      fetch(`${url}/user/save`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: data }),
      });
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    } else {
      console.log(res);
      res.json().then((response) => {
        console.log(response);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.user,
        });
      });
    }
  });
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
