import { collection, addDoc } from "firebase/firestore";
import moment from "moment";
import { db } from "../data/firebase";
import { types } from "../types/types";

export const startLoggedInUser = (nameUser) => {
  return async (dispatch) => {
    try {
      const newUser = await addDoc(collection(db, "loggedInUser"), {
        nameUser,
        date: moment(new Date()).format("MMMM Do YYYY, h:mm:ss a"),
      });
      dispatch(Login(newUser.id, nameUser));
    } catch (error) {
      console.error(error);
    }
  };
};

const Login = (id, nameUser) => ({
  type: types.authLogin,
  payload: {
    id,
    nameUser,
  },
});
