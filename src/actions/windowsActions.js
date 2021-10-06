import { types } from "../types/types";

export const startWindow = (window) => {
  return (dispatch) => {
    dispatch(toggleWindowActive(window));
    dispatch(setWindow(window));
  };
};

export const setWindow = (window) => ({
  type: types.setWindow,
  payload: window,
});
export const toggleWindowActive = (window) => ({
  type: types.toggleWindowActive,
  payload: window,
});
