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
export const toggleWindowActive = (window) => {
  console.log(window);

  return {
    type: types.toggleWindowActive,
    payload: window,
  };
};
