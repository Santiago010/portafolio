import { types } from "../types/types";

const initialState = {
  id: "",
  nameUser: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        id: action.payload.id,
        nameUser: action.payload.nameUser,
      };
    default:
      return state;
  }
};
