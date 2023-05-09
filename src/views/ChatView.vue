<template>
  <div
    id="Messages"
    class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)] w-[420px]"
  >
    <MessageRow
      v-for="message in messages"
      :key="message.id"
      :message="message"
      :openChat="openChat"
    />
  </div>
</template>

<script setup>
import MessageRow from "../components/MessageRow.vue";

const props = defineProps({
  messages: {
    type: [Array],
  },
  openChat: {
    type: Function,
  },
});

const { messages, openChat } = props;
</script>

<style scoped></style>
