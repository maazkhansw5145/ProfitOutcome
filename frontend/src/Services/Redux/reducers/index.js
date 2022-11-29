import { combineReducers } from "redux";
import authReducer from "./authReducer";
import serverReducer from "./serverReducer";
import errorReducer from "./errorReducer";
import LocalStorage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const authPersistConfig = {
  key: "auth",
  storage: LocalStorage,
  blacklist: ["error","server"],
};
export default combineReducers({
  server: serverReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  error: errorReducer,
});
