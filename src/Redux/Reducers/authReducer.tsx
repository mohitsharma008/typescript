import { ActionType } from "../Types/index";
import { Action } from "../ActionDeclare/index";
interface RepositoriesState {
  error: string | null;
  loading: Boolean;
  token: string | null;
}
const initialState = {
  error: null,
  loading: true,
  token: null,
};

const AuthReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  console.log(state, action);
  switch (action.type) {
    case ActionType.SIGN_UP:
      return { error: null, loading: false, token: action.payload };
    case ActionType.SIGN_IN:
      return { error: null, loading: false, token: action.payload };

    case ActionType.LOGOUT:
      return { error: null, loading: false, token: null };
    default:
      return state;
  }
};
export default AuthReducer;
