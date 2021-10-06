import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { FetchData } from "../helpers/FetchData";
import { types } from "../types/types";

export const StartSetDimensionMain = (dimension) => ({
  type: types.setDimensionMain,
  payload: { ...dimension },
});

export const startMsgError = (error) => {
  return (dispatch) => {
    dispatch(setMsgError(error));
    setTimeout(() => {
      dispatch(setMsgError(null));
    }, 5000);
  };
};

export const sendEmail = (email, mesage) => {
  return async (dispatch, getState) => {
    dispatch(setLoading());
    const { authReducer } = getState();
    try {
      const res = await FetchData(authReducer.nameUser, email, mesage);
      if (res.state === "OK") {
        dispatch(setMsgSuccess(`${res.response}`));
      } else {
        dispatch(setMsgError(res.response));
      }
      dispatch(setLoading());
    } catch (error) {
      console.error(error);
      dispatch(setLoading());
    }
  };
};

export const startGettingProjects = () => {
  return async (dispatch) => {
    const arrayProjects = [];
    const querySnapshot = await getDocs(collection(db, "dataProjects"));
    querySnapshot.forEach((doc) => {
      arrayProjects.push(doc.data());
    });
    dispatch(uploadProjects(arrayProjects));
  };
};

const uploadProjects = (arrayProjects) => ({
  type: types.dataProjects,
  payload: arrayProjects,
});

const setMsgSuccess = (success) => ({
  type: types.setMsgSuccess,
  payload: success,
});
const setMsgError = (error) => ({
  type: types.setMsgError,
  payload: error,
});

const setLoading = () => ({
  type: types.setLoading,
});
