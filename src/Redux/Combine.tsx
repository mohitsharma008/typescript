import { combineReducers } from "redux";
import AuthReducer from "./Reducers/authReducer";
const reducers = combineReducers({
  repositories: AuthReducer,
});
export default reducers;
export type RootState = ReturnType<typeof reducers>;
