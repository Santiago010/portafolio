import { collection, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";
import { types } from "../types/types";

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
