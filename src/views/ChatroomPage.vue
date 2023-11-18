<template>
  <div class="container">
    <NavBar></NavBar>
    <ChatWindow></ChatWindow>
    <ChatForm></ChatForm>
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow";
import ChatForm from "../components/ChatForm";
import NavBar from "../components/NavBar";
import { watch } from "vue";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
export default {
  components: {
    ChatWindow,
    ChatForm,
    NavBar,
  },
  setup() {
    let router = useRouter();
    let { user } = getUser();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style></style>
