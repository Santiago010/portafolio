import { types } from "../types/types";

const ininitalState = {
  projects: null,
};

export const dataProjectReducer = (state = ininitalState, action) => {
  switch (action.type) {
    case types.dataProjects:
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};
