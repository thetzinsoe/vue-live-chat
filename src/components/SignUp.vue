<template>
  <div class="">
    <h2>T-Chat_Sign Up</h2>
    <form @submit.prevent="signUp">
      <input
        type="text"
        placeholder="Display Name"
        v-model="displayName"
        required
      />
      <input type="email" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" v-model="password" />
      <div v-if="error" class="error">{{ error }}</div>
      <button>
        <span v-if="spinWheel">Sign Up</span>
        <span v-else><SpinnerWheel></SpinnerWheel></span>
      </button>
    </form>
  </div>
</template>

<script>
import SpinnerWheel from "./SpinnerWheel";
import { ref } from "vue";
import useSignup from "../composables/useSignup";
export default {
  components: { SpinnerWheel },
  setup(props, context) {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");
    let spinWheel = ref(true);
    let { error, createAccount } = useSignup();
    let signUp = async () => {
      spinWheel.value = false;
      let res = await createAccount(
        displayName.value,
        email.value,
        password.value
      );
      if (res) {
        context.emit("chatroompage");
      } else {
        spinWheel.value = true;
        console.log(error.value);
      }
    };
    return { displayName, email, password, signUp, error, spinWheel };
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
  margin: 0 18px;
}
</style>
