<template>
  <div>
    <nav v-if="user" class="">
      <div>
        <p>{{ user.displayName }}</p>
        <small>{{ user.email }}</small>
      </div>
      <button @click="logOut">
        <span v-if="spinWheel">log out</span
        ><span v-else><SpinnerWheel></SpinnerWheel></span>
      </button>
    </nav>
    <div v-else><SpinnerWheel></SpinnerWheel></div>
  </div>
</template>

<script>
import SpinnerWheel from "./SpinnerWheel";
import useLogout from "../composables/useLogout";
import { ref } from "vue";
import getUser from "@/composables/getUser";
export default {
  components: { SpinnerWheel },
  setup() {
    let spinWheel = ref(true);
    let { user } = getUser();
    let { accountLogut } = useLogout();
    let logOut = async () => {
      spinWheel.value = false;
      await accountLogut();
      spinWheel.value = true;
    };
    // console.log(user);
    return { logOut, spinWheel, user };
  },
};
</script>

<style scoped>
nav {
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(242, 236, 236);
}
nav p {
  margin: 0;
  text-transform: uppercase;
  color: rgb(32, 28, 28);
}
nav small {
  font-style: italic;
  color: rgb(177, 205, 200);
}
div button {
  background: crimson;
}
button span {
  text-decoration: none;
}
span .spinner {
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
  border-top-color: white;
  margin: 0 15px;
}
</style>
