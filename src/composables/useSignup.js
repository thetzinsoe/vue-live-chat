import "../firebase/config";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ref } from "vue";
let error = ref("");
let auth = getAuth();
let createAccount = async (displayName, email, password) => {
  try {
    let res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("could not create new user");
    }
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    return res;
  } catch (err) {
    error.value = err.message;
  }
};
let useSignup = () => {
  return { error, createAccount };
};
export default useSignup;
