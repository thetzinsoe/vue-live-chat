<template>
  <form>
    <textarea
      @keypress.enter="eventHandler"
      placeholder="text message and hit enter to send"
      v-model="message"
    ></textarea>
  </form>
</template>

<script>
import { serverTimestamp } from "firebase/firestore";
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();
    let { error, saveMessage } = useCollection("messages");
    let eventHandler = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: serverTimestamp(),
      };
      await saveMessage(chat);
      message.value = "";
    };
    return { eventHandler, message, error };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
