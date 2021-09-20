import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../Combine";
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
