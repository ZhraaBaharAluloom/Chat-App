<template>
  <div
    id="chats"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRow :chatsList="chatsList" :openChat="openChat" />
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
});
</script>

<style scoped></style>
