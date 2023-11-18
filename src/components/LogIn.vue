<template>
  <div>
    <h2>T-Chat_Log In</h2>
    <form @submit.prevent="logIn">
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <button>
        <span v-if="spinWheel">Log In</span
        ><span v-else> <SpinnerWheel></SpinnerWheel></span>
      </button>
    </form>
  </div>
</template>

<script>
import SpinnerWheel from "./SpinnerWheel";
import { ref } from "vue";
import useLogin from "../composables/useLogin";
export default {
  components: { SpinnerWheel },
  setup(props, context) {
    let email = ref("");
    let password = ref("");
    let spinWheel = ref(true);
    let { error, loginAccount } = useLogin();
    let logIn = async () => {
      spinWheel.value = false;
      let res = await loginAccount(email.value, password.value);
      if (res) {
        context.emit("chatroompage");
      } else {
        spinWheel.value = true;
        console.log(error.value);
      }
    };

    return { email, password, logIn, error, spinWheel };
  },
};
</script>

<style scoped>
button span {
  text-decoration: none;
}
.spinner {
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
  border-top-color: white;
  margin: 0 13px;
}
</style>
