<template>
  <div
    id="chats"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRow
      v-for="user in usersList"
      :key="user.id"
      :chatsList="chatsList"
      :openChat="openChat"
      :user="user"
    />
  </div>
</template>

<script setup>
// import { watch, watchEffect } from "vue";
import MessageRow from "../components/MessageRow.vue";

const props = defineProps({
  chatsList: {
    type: Array,
  },
  openChat: {
    type: Function,
  },
  usersList: {
    type: Array,
  },
});
// console.log("🚀 ~ file: ChatView.vue:31 ~ usersList:", usersList)
// console.log("🚀 ~ file: ChatView.vue:31 ~ chatsList:", chatsList)
// console.log("🚀 ~ file: ChatView.vue:31 ~ openChat:", props.openChat)
</script>

<style scoped></style>
