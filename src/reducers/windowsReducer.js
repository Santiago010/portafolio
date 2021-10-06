import { types } from "../types/types";

const initialState = {
  windows: [
    {
      name: "profile",
      open: false,
    },
    {
      name: "projects",
      open: false,
    },
    {
      name: "contact",
      open: false,
    },
    {
      name: "about",
      open: false,
    },
    {
      name: "welcome",
      open: false,
    },
  ],
  windowActive: null,
};

export const windowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.toggleWindowActive:
      return {
        ...state,
        windowActive: action.payload,
      };
    case types.setWindow:
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.name === action.payload
            ? {
                name: w.name,
                open: !w.open,
              }
            : w
        ),
      };
    default:
      return state;
  }
};
