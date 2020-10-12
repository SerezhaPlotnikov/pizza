import { MainTypes } from "./types";

export const FetchRequest = () => ({ type: MainTypes.FETCH_REQUEST });
export const FetchError = (error) => ({ type: MainTypes.FETCH_ERROR, error });
export const FetchSuccess = (data) => ({ type: MainTypes.FETCH_SUCCESS, data });
export const FetchSelected = (selected) => ({
  type: MainTypes.FETCH_SELECTED,
  selected,
});
