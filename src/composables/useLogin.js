import "../firebase/config";
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
let auth = getAuth();
let error = ref("");
let loginAccount = async (email, password) => {
  try {
    let res = await signInWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("can't loggin! Please try again.");
    }
    return res;
  } catch (err) {
    error.value = err.message;
  }
};
let useLogin = () => {
  return { error, loginAccount };
};
export default useLogin;
