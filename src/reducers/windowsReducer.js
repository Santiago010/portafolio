import { types } from "../types/types";

const initialState = {
  windowProjects: false,
  windowAboutMe: false,
  windowCV: false,
  windowContact: false,
};

export const windowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setWindowProjects:
      return {
        ...state,
        windowProjects: !state.windowProjects,
      };
    case types.setWindowAboutMe:
      return {
        ...state,
        windowAboutMe: !state.windowAboutMe,
      };
    case types.setWindowCV:
      return {
        ...state,
        windowCV: !state.windowCV,
      };
    case types.setWindowContact:
      return {
        ...state,
        windowContact: !state.windowContact,
      };
    default:
      return state;
  }
};
