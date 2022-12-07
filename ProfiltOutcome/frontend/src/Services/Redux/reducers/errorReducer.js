import { GET_ERRORS, CLEAR_ERRORS,LOGOUT_SUCCESS } from "../Types";

const initialState = {
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload,
      };
      case LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
