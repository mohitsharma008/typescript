import { ActionType } from "../Types";
import { Dispatch } from "redux";
import { Action } from "../ActionDeclare/index";
export const signIn = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SIGN_IN,
      payload: name,
    });
  };
};

export const signUp = (name: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.SIGN_UP, payload: name });
  };
};

export const logout = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.LOGOUT });
  };
};
