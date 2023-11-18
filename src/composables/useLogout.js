import { getAuth } from "firebase/auth";
let auth = getAuth();
let accountLogut = async () => {
  try {
    await auth.signOut();
    // console.log("account logged out");
  } catch (err) {
    console.log(err.message);
  }
};
let useLogout = () => {
  return { accountLogut };
};
export default useLogout;
