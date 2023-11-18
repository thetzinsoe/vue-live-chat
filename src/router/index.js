import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "../views/WelcomePage.vue";
import ChatroomPage from "@/views/ChatroomPage.vue";
import { getAuth } from "firebase/auth";
let auth = getAuth();
const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (!user) {
        next();
      } else {
        next({ name: "ChatroomPage" });
      }
    },
  },
  {
    path: "/chatroom",
    name: "ChatroomPage",
    component: ChatroomPage,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (user) {
        next();
      } else {
        next({ name: "WelcomePage" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
