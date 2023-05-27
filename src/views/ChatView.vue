<template>
  <div
    id="chats"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRow
      v-for="chat in chats"
      :key="chat.id"
      :chat="chat"
      :openChat="openChat"
    />
  </div>
</template>

<script setup>
import MessageRow from "../components/MessageRow.vue";

const props = defineProps({
  chats: {
    type: [Array],
  },
  openChat: {
    type: Function,
  },
});

const { chats, openChat } = props;
</script>

<style scoped></style>
