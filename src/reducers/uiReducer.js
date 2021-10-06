import { types } from "../types/types";

const initialState = {
  msgError: null,
  msgSuccess: null,
  loading: false,
  projects: null,
  dimensionMain: {
    width: 0,
    height: 0,
  },
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setMsgError:
      return {
        ...state,
        msgError: action.payload,
      };
    case types.setLoading:
      return {
        ...state,
        loading: !state.loading,
      };
    case types.setMsgSuccess:
      return {
        ...state,
        msgSuccess: action.payload,
      };
    case types.dataProjects:
      return {
        ...state,
        projects: action.payload,
      };
    case types.setDimensionMain:
      return {
        ...state,
        dimensionMain: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
