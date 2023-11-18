<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <LogIn @chatroompage="chatroompage"></LogIn>
      <p>
        Not a member ?
        <span @click="showLoginForm = !showLoginForm">create account ?</span>
      </p>
    </div>
    <div v-else>
      <SignUp @chatroompage="chatroompage"></SignUp>
      <p>
        Already member ?
        <span @click="showLoginForm = !showLoginForm">login account ?</span>
      </p>
    </div>
  </div>
</template>

<script>
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  components: {
    LogIn,
    SignUp,
  },
  setup() {
    let router = useRouter();
    let showLoginForm = ref(true);
    let chatroompage = () => {
      router.push({ name: "ChatroomPage" });
    };
    return { showLoginForm, chatroompage };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0px;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid rgb(89, 88, 88);
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
