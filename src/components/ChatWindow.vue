<template>
  <div class="chat-window">
    <div class="messages" v-if="formatSms.length" ref="msgBox">
      <div class="single" v-for="msg in formatSms" :key="msg.id">
        <small class="created-at">{{ msg.created_at }}</small>
        <div class="message-box">
          <div class="name">{{ msg.name }}</div>
          <div class="message">{{ msg.message }}</div>
        </div>
      </div>
    </div>
    <div v-else><SpinnerWheel></SpinnerWheel></div>
  </div>
</template>

<script>
import SpinnerWheel from "./SpinnerWheel";
import { db } from "@/firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { ref, computed, onUpdated } from "vue";
import { formatDistanceToNow } from "date-fns";
export default {
  components: { SpinnerWheel },
  setup() {
    let msgBox = ref(null);
    let dbMessages = ref([]);

    // scroll bar setting
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    });

    // change date format with date-fns
    let formatSms = computed(() => {
      return dbMessages.value.map((sms) => {
        let formatTime = formatDistanceToNow(sms.created_at.toDate());
        return { ...sms, created_at: formatTime };
      });
    });

    // fetch db
    let res = query(collection(db, "messages"), orderBy("created_at", "asc"));
    onSnapshot(res, (data) => {
      let result = [];
      data.docs.map((doc) => {
        let document = { ...doc.data(), id: doc.data().id };
        doc.data().created_at && result.push(document);
      });
      dbMessages.value = result;
    });
    return { formatSms, msgBox };
  },
};
</script>

<style>
.chat-window {
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  margin-bottom: 4px;
  color: rgb(198, 190, 190);
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.message-box {
  display: flex;
}
.message {
  background: rgb(130, 168, 163);
  padding: 5px;
  border-radius: 10px;
  color: white;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
