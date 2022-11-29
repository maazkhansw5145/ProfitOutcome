import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  CLEAR_AUTH_MSG,
} from "../Types";

const initialState = {
  token: null,
  isAuthenticated: null,
  msg: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        // token: action.payload.token,
        token: "dummy token",
        isAuthenticated: true,
        msg: "Login Successfully",
      };
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case CLEAR_AUTH_MSG:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        msg: "Logout",
      };
    default:
      return state;
  }
}
