import { getAuth } from "firebase/auth";
import { ref } from "vue";
let auth = getAuth();
let user = ref(auth.currentUser);
let getUser = () => {
  auth.onAuthStateChanged((_user) => {
    user.value = _user;
  });
  return { user };
};
export default getUser;
