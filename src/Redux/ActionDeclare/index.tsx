import { ActionType } from "../Types/index";
interface SignInAction {
  type: ActionType.SIGN_IN;
  payload: string;
}
interface SignUpAction {
  type: ActionType.SIGN_UP;
  payload: string;
}
interface LogoutAction {
  type: ActionType.LOGOUT;
}
export type Action = SignInAction | SignUpAction | LogoutAction;
