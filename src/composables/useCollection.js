import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";

let useCollection = (collectionName) => {
  let error = ref("");
  let saveMessage = async (newMessage) => {
    try {
      let res = collection(db, collectionName);
      await addDoc(res, newMessage);
    } catch (err) {
      //   console.log(err.message);
      error.value = "could not send message";
    }
  };
  return { error, saveMessage };
};
export default useCollection;
