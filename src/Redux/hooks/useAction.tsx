import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../Actions/AuthAction";
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
